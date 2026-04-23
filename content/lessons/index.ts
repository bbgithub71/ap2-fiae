import type { Lesson } from "./_types";
import { pseudocode } from "./pseudocode";
import { kontrollstrukturen } from "./kontrollstrukturen";
import { rekursion } from "./rekursion";
import { suchenSortieren } from "./suchen-sortieren";
import { datenstrukturen } from "./datenstrukturen";
import { sqlGrundlagen } from "./sql-grundlagen";
import { sqlSelect } from "./sql-select";
import { sqlJoins } from "./sql-joins";
import { sqlUpdate } from "./sql-update";
import { sqlInsert } from "./sql-insert";
import { sqlDelete } from "./sql-delete";
import { sqlDdl } from "./sql-ddl";
import { sqlInjection } from "./sql-injection";
import { relationalesDatenmodell } from "./relationales-datenmodell";
import { erm } from "./erm";
import { normalisierung } from "./normalisierung";
import { nosql } from "./nosql";
import { transaktionenAcid } from "./transaktionen-acid";
import { aktivitaetsdiagramm } from "./aktivitaetsdiagramm";
import { klassendiagramm } from "./klassendiagramm";
import { klassenObjekte } from "./klassen-objekte";
import { klassenbeziehungen } from "./klassenbeziehungen";
import { sequenzdiagramm } from "./sequenzdiagramm";
import { zustandsdiagramm } from "./zustandsdiagramm";
import { anwendungsfalldiagramm } from "./anwendungsfalldiagramm";
import { komponentenVerteilungsdiagramm } from "./komponenten-verteilungsdiagramm";
import { generics } from "./generics";
import { ooGrundprinzipien } from "./oo-grundprinzipien";
import { paradigmen } from "./paradigmen";
import { typisierungCompiler } from "./typisierung-compiler";
import { fehlerbehandlung } from "./fehlerbehandlung";
import { nebenlaeufigkeit } from "./nebenlaeufigkeit";
import { noLowCode } from "./no-low-code";
import { kiGrundlagen } from "./ki-grundlagen";
import { qualitaetssicherungLesson } from "./qualitaetssicherung";
import { testmethoden } from "./testmethoden";
import { teststufen } from "./teststufen";
import { unitTestsCoverage } from "./unit-tests-coverage";
import { tdd } from "./tdd";
import { testautomatisierung } from "./testautomatisierung";
import { lastPerformanceTests } from "./last-performance-tests";
import { schutzziele } from "./schutzziele";
import { angriffe } from "./angriffe";
import { kryptografie } from "./kryptografie";
import { dsgvo } from "./dsgvo";
import { backupArchivierung } from "./backup-archivierung";
import { authentifizierung } from "./authentifizierung";
import { osiModell } from "./osi-modell";
import { ipSubnetting } from "./ip-subnetting";
import { protokolle } from "./protokolle";
import { topologien } from "./topologien";
import { vpnWlan } from "./vpn-wlan";
import { cloudSpeicher } from "./cloud-speicher";
import { architekturPatterns } from "./architektur-patterns";
import { modularisierung } from "./modularisierung";
import { container } from "./container";
import { designPatterns } from "./design-patterns";
import { http } from "./http";
import { restApis } from "./rest-apis";
import { soapWebservices } from "./soap-webservices";
import { datenformate } from "./datenformate";
import { xmlValidierung } from "./xml-validierung";
import { webSicherheit } from "./web-sicherheit";
import { vorgehensmodelle } from "./vorgehensmodelle";
import { scrum } from "./scrum";
import { bpmn } from "./bpmn";
import { versionsverwaltungLesson } from "./versionsverwaltung";
import { anforderungen } from "./anforderungen";
import { makeOrBuy } from "./make-or-buy";
import { greenIt } from "./green-it";
import { kundenbeziehungen } from "./kundenbeziehungen";
import { recht } from "./recht";
import { lizenzmodelle } from "./lizenzmodelle";
import { wisoArbeitsrecht } from "./wiso-arbeitsrecht";
import { wisoSozialversicherung } from "./wiso-sozialversicherung";
import { wisoBgb } from "./wiso-bgb";
import { wisoRechtsformen } from "./wiso-rechtsformen";
import { wisoMitbestimmung } from "./wiso-mitbestimmung";
import { wisoWirtschaftsordnung } from "./wiso-wirtschaftsordnung";
import { wisoNachhaltigkeit } from "./wiso-nachhaltigkeit";
import { praesentieren } from "./praesentieren";
import { usability } from "./usability";
import { projektphasen } from "./projektphasen";
import { netzplan } from "./netzplan";
import { bedarfsMachbarkeitsanalyse } from "./bedarfs-machbarkeitsanalyse";
import { nutzwertanalyse } from "./nutzwertanalyse";
import { risikomanagement } from "./risikomanagement";
import { wirtschaftlichkeitsanalyse } from "./wirtschaftlichkeitsanalyse";

const lessonList: Lesson[] = [
  // Algorithmen
  pseudocode,
  kontrollstrukturen,
  rekursion,
  suchenSortieren,
  datenstrukturen,
  // Datenbanken & SQL
  sqlGrundlagen,
  sqlSelect,
  sqlJoins,
  sqlUpdate,
  sqlInsert,
  sqlDelete,
  sqlDdl,
  sqlInjection,
  relationalesDatenmodell,
  erm,
  normalisierung,
  nosql,
  transaktionenAcid,
  // UML & OO
  aktivitaetsdiagramm,
  klassendiagramm,
  klassenObjekte,
  klassenbeziehungen,
  sequenzdiagramm,
  zustandsdiagramm,
  anwendungsfalldiagramm,
  komponentenVerteilungsdiagramm,
  generics,
  ooGrundprinzipien,
  // Programmierung
  paradigmen,
  typisierungCompiler,
  fehlerbehandlung,
  nebenlaeufigkeit,
  noLowCode,
  kiGrundlagen,
  // Qualität & Testen
  qualitaetssicherungLesson,
  testmethoden,
  teststufen,
  unitTestsCoverage,
  tdd,
  testautomatisierung,
  lastPerformanceTests,
  // Sicherheit
  schutzziele,
  angriffe,
  kryptografie,
  dsgvo,
  backupArchivierung,
  authentifizierung,
  // Netzwerk
  osiModell,
  ipSubnetting,
  protokolle,
  topologien,
  vpnWlan,
  cloudSpeicher,
  // Architektur
  architekturPatterns,
  modularisierung,
  container,
  designPatterns,
  // Web & Schnittstellen
  http,
  restApis,
  soapWebservices,
  datenformate,
  xmlValidierung,
  webSicherheit,
  // Prozesse
  vorgehensmodelle,
  scrum,
  bpmn,
  versionsverwaltungLesson,
  anforderungen,
  makeOrBuy,
  greenIt,
  projektphasen,
  netzplan,
  bedarfsMachbarkeitsanalyse,
  nutzwertanalyse,
  risikomanagement,
  // Wirtschaft
  wirtschaftlichkeitsanalyse,
  kundenbeziehungen,
  recht,
  lizenzmodelle,
  wisoArbeitsrecht,
  wisoSozialversicherung,
  wisoBgb,
  wisoRechtsformen,
  wisoMitbestimmung,
  wisoWirtschaftsordnung,
  wisoNachhaltigkeit,
  // Kommunikation
  praesentieren,
  usability,
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
