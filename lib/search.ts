import { topics, type TopicMeta } from "./topics";
import { categoryById } from "./categories";
import { priorityMeta, type Priority } from "./priority";

export interface SearchDoc {
  slug: string;
  title: string;
  short?: string;
  summary: string;
  keywords: string[];
  categoryId: string;
  categoryTitle: string;
  priority: Priority;
  frequencyPct?: number;
  pointsAllTime?: number;
  newSince2025?: boolean;
  /** Bereits normalisierte Felder, damit pro Suchanfrage nicht erneut gefoldet werden muss. */
  normTitle: string;
  normShort: string;
  normSummary: string;
  normKeywords: string[];
  normCategoryTitle: string;
  /** Bag-of-words für AND-Filter über die Tokens. */
  normHaystack: string;
}

/**
 * Faltet deutschen Text auf eine such-freundliche Form:
 *   - Lowercase
 *   - Umlaute → ae/oe/ue, ß → ss
 *   - Diakritika (NFD) entfernt, damit é→e usw. matchen
 *   - Mehrfach-Whitespace zusammengezogen
 */
export function fold(input: string): string {
  return input
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function buildDoc(topic: TopicMeta): SearchDoc {
  const cat = categoryById(topic.category);
  const keywords = topic.keywords ?? [];
  const haystack = [
    topic.title,
    topic.short ?? "",
    topic.summary,
    cat.title,
    keywords.join(" "),
  ].join(" ");
  return {
    slug: topic.slug,
    title: topic.title,
    short: topic.short,
    summary: topic.summary,
    keywords,
    categoryId: cat.id,
    categoryTitle: cat.title,
    priority: topic.priority,
    frequencyPct: topic.frequencyPct,
    pointsAllTime: topic.pointsAllTime,
    newSince2025: topic.newSince2025,
    normTitle: fold(topic.title),
    normShort: fold(topic.short ?? ""),
    normSummary: fold(topic.summary),
    normKeywords: keywords.map(fold),
    normCategoryTitle: fold(cat.title),
    normHaystack: fold(haystack),
  };
}

/** Statisch zur Modul-Ladezeit. ~87 Themen, einmalige Vorberechnung. */
export const searchIndex: SearchDoc[] = topics.map(buildDoc);

export interface SearchResult {
  doc: SearchDoc;
  score: number;
  /** Welches Feld den größten Beitrag geliefert hat – für die Trefferanzeige. */
  matchedField: "title" | "keyword" | "summary" | "category" | "short";
  /** Original-Treffertext (für Hervorhebung im UI). */
  matchedText: string;
}

/**
 * Bewertet ein einzelnes Dokument gegen die normalisierten Query-Tokens.
 * Rückgabe `null`, wenn nicht alle Tokens irgendwo im Haystack vorkommen.
 */
function scoreDoc(doc: SearchDoc, tokens: string[]): SearchResult | null {
  // AND-Filter: jedes Token muss irgendwo matchen, sonst raus.
  for (const t of tokens) {
    if (!doc.normHaystack.includes(t)) return null;
  }

  let score = 0;
  let bestField: SearchResult["matchedField"] = "summary";
  let bestText = doc.summary;
  let bestFieldScore = -1;

  // Pro Token werden die Felder einzeln bewertet, damit Title-Hits Vorrang vor Summary haben.
  for (const t of tokens) {
    let tokenContribution = 0;
    let tokenField: SearchResult["matchedField"] = "summary";
    let tokenFieldScore = 0;
    let tokenText = doc.summary;

    if (doc.normTitle === t) {
      tokenContribution = Math.max(tokenContribution, 1000);
      tokenFieldScore = 1000;
      tokenField = "title";
      tokenText = doc.title;
    } else if (doc.normTitle.startsWith(t)) {
      tokenContribution = Math.max(tokenContribution, 400);
      if (400 > tokenFieldScore) {
        tokenFieldScore = 400;
        tokenField = "title";
        tokenText = doc.title;
      }
    } else if (doc.normTitle.includes(t)) {
      tokenContribution = Math.max(tokenContribution, 200);
      if (200 > tokenFieldScore) {
        tokenFieldScore = 200;
        tokenField = "title";
        tokenText = doc.title;
      }
    }

    // Keyword-exakt > Keyword-Teilstring.
    let keywordHit = 0;
    for (let i = 0; i < doc.normKeywords.length; i++) {
      const nk = doc.normKeywords[i];
      if (nk === t) {
        keywordHit = Math.max(keywordHit, 180);
        if (180 > tokenFieldScore) {
          tokenFieldScore = 180;
          tokenField = "keyword";
          tokenText = doc.keywords[i];
        }
      } else if (nk.includes(t)) {
        keywordHit = Math.max(keywordHit, 90);
        if (90 > tokenFieldScore) {
          tokenFieldScore = 90;
          tokenField = "keyword";
          tokenText = doc.keywords[i];
        }
      }
    }
    tokenContribution += keywordHit;

    if (doc.normShort.includes(t) && doc.normShort.length > 0) {
      tokenContribution += 50;
      if (50 > tokenFieldScore) {
        tokenFieldScore = 50;
        tokenField = "short";
        tokenText = doc.short ?? "";
      }
    }

    if (doc.normSummary.includes(t)) {
      tokenContribution += 30;
      if (30 > tokenFieldScore) {
        tokenFieldScore = 30;
        tokenField = "summary";
        tokenText = doc.summary;
      }
    }

    if (doc.normCategoryTitle.includes(t)) {
      tokenContribution += 25;
      if (25 > tokenFieldScore) {
        tokenFieldScore = 25;
        tokenField = "category";
        tokenText = doc.categoryTitle;
      }
    }

    if (tokenContribution === 0) {
      // Token kommt zwar im Haystack vor, aber nirgends in einem gewichteten Feld
      // → minimaler Beitrag, damit AND-Filter konsistent bleibt.
      tokenContribution = 5;
    }

    score += tokenContribution;
    if (tokenFieldScore > bestFieldScore) {
      bestFieldScore = tokenFieldScore;
      bestField = tokenField;
      bestText = tokenText;
    }
  }

  // Tie-Breaker: Priorität gewichtet leicht – essentiell ranked oben bei Score-Gleichstand.
  score += priorityMeta[doc.priority].weight * 2;

  return { doc, score, matchedField: bestField, matchedText: bestText };
}

export interface SearchOptions {
  limit?: number;
}

export function search(query: string, options: SearchOptions = {}): SearchResult[] {
  const limit = options.limit ?? 10;
  const folded = fold(query);
  if (folded.length === 0) return [];

  const tokens = folded.split(" ").filter((t) => t.length >= 1);
  if (tokens.length === 0) return [];

  const out: SearchResult[] = [];
  for (const doc of searchIndex) {
    const r = scoreDoc(doc, tokens);
    if (r) out.push(r);
  }
  out.sort((a, b) => b.score - a.score);
  return out.slice(0, limit);
}
