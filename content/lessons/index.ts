import type { Lesson } from "./_types";
import { pseudocode } from "./pseudocode";
import { sqlGrundlagen } from "./sql-grundlagen";
import { sqlSelect } from "./sql-select";
import { sqlJoins } from "./sql-joins";
import { sqlUpdate } from "./sql-update";
import { sqlInsert } from "./sql-insert";
import { sqlDelete } from "./sql-delete";
import { relationalesDatenmodell } from "./relationales-datenmodell";
import { erm } from "./erm";
import { normalisierung } from "./normalisierung";
import { aktivitaetsdiagramm } from "./aktivitaetsdiagramm";
import { klassendiagramm } from "./klassendiagramm";
import { sequenzdiagramm } from "./sequenzdiagramm";
import { zustandsdiagramm } from "./zustandsdiagramm";
import { ooGrundprinzipien } from "./oo-grundprinzipien";
import { scrum } from "./scrum";
import { vorgehensmodelle } from "./vorgehensmodelle";
import { dsgvo } from "./dsgvo";
import { schutzziele } from "./schutzziele";
import { http } from "./http";
import { restApis } from "./rest-apis";
import { bpmn } from "./bpmn";
import { kiGrundlagen } from "./ki-grundlagen";
import { designPatterns } from "./design-patterns";
import { kontrollstrukturen } from "./kontrollstrukturen";
import { suchenSortieren } from "./suchen-sortieren";
import { unitTestsCoverage } from "./unit-tests-coverage";
import { ipSubnetting } from "./ip-subnetting";
import { osiModell } from "./osi-modell";
import { tdd } from "./tdd";
import { kryptografie } from "./kryptografie";
import { angriffe } from "./angriffe";
import { transaktionenAcid } from "./transaktionen-acid";
import { testmethoden } from "./testmethoden";
import { teststufen } from "./teststufen";
import { anforderungen } from "./anforderungen";
import { sqlDdl } from "./sql-ddl";

const lessonList: Lesson[] = [
  pseudocode,
  kontrollstrukturen,
  suchenSortieren,
  sqlGrundlagen,
  sqlSelect,
  sqlJoins,
  sqlUpdate,
  sqlInsert,
  sqlDelete,
  relationalesDatenmodell,
  erm,
  normalisierung,
  aktivitaetsdiagramm,
  klassendiagramm,
  sequenzdiagramm,
  zustandsdiagramm,
  ooGrundprinzipien,
  scrum,
  vorgehensmodelle,
  dsgvo,
  schutzziele,
  http,
  restApis,
  bpmn,
  kiGrundlagen,
  designPatterns,
  unitTestsCoverage,
  ipSubnetting,
  osiModell,
  tdd,
  kryptografie,
  angriffe,
  transaktionenAcid,
  testmethoden,
  teststufen,
  anforderungen,
  sqlDdl,
];

export const lessonsBySlug: Record<string, Lesson> = Object.fromEntries(
  lessonList.map((l) => [l.slug, l]),
);

export function getLesson(slug: string): Lesson | undefined {
  return lessonsBySlug[slug];
}

export function lessonSlugs(): string[] {
  return lessonList.map((l) => l.slug);
}
