export type CategoryId =
  | "datenbanken"
  | "uml"
  | "algorithmen"
  | "programmierung"
  | "qualitaet"
  | "sicherheit"
  | "netzwerk"
  | "architektur"
  | "web"
  | "prozesse"
  | "wirtschaft"
  | "kommunikation";

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "datenbanken",
    title: "Datenbanken & SQL",
    description: "Relationales Datenmodell, SQL, ERM, Normalisierung, Transaktionen, NoSQL.",
    icon: "database",
  },
  {
    id: "uml",
    title: "UML & Objektorientierung",
    description: "Klassen-, Aktivitäts-, Sequenz-, Zustandsdiagramm, OO-Prinzipien.",
    icon: "diagram",
  },
  {
    id: "algorithmen",
    title: "Algorithmen & Pseudocode",
    description: "Pseudocode, Kontrollstrukturen, Rekursion, Suchen & Sortieren.",
    icon: "code",
  },
  {
    id: "programmierung",
    title: "Programmiersprachen & Paradigmen",
    description: "Typisierung, Compiler vs. Interpreter, Paradigmen, Datenstrukturen.",
    icon: "terminal",
  },
  {
    id: "qualitaet",
    title: "Qualität & Testen",
    description: "Qualitätssicherung, Teststufen, Black-/White-Box, Testautomatisierung.",
    icon: "check",
  },
  {
    id: "sicherheit",
    title: "IT-Sicherheit & Datenschutz",
    description: "Schutzziele, DSGVO, Kryptografie, Angriffe, OWASP-Themen.",
    icon: "shield",
  },
  {
    id: "netzwerk",
    title: "Netzwerk & Infrastruktur",
    description: "OSI, TCP/IP, Subnetting, Routing, VPN, WLAN, Serverarten.",
    icon: "network",
  },
  {
    id: "architektur",
    title: "Software-Architektur & Patterns",
    description: "Architektur-Patterns, Design Patterns, Container, Modularisierung.",
    icon: "layers",
  },
  {
    id: "web",
    title: "Web & Schnittstellen",
    description: "HTTP, REST, SOAP, JSON/XML/CSV, Web-Apps, Sicherheit von Webanwendungen.",
    icon: "globe",
  },
  {
    id: "prozesse",
    title: "Prozesse & Projektarbeit",
    description: "Vorgehensmodelle, Scrum, Versionsverwaltung, Anforderungsanalyse.",
    icon: "workflow",
  },
  {
    id: "wirtschaft",
    title: "Wirtschaft & Recht",
    description: "Kunden, CRM, Lizenzen, Recht, WiSo-Grundlagen.",
    icon: "briefcase",
  },
  {
    id: "kommunikation",
    title: "Kommunikation & Ergonomie",
    description: "Präsentieren, Usability, Dialoggestaltung.",
    icon: "message",
  },
];

export function categoryById(id: CategoryId): Category {
  const c = categories.find((c) => c.id === id);
  if (!c) throw new Error(`Unknown category: ${id}`);
  return c;
}
