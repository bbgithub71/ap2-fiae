import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const xmlValidierung: Lesson = {
  slug: "xml-validierung",
  objectives: [
    "Wohlgeformt und gültig auseinanderhalten",
    "DTD und XSD vergleichen",
    "Namespaces und Parser-Typen einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Zwei Validierungs-Ebenen</h2>
      <ul>
        <li><strong>Wohlgeformt:</strong> genau ein Wurzelelement, korrekt geschachtelt/geschlossen, Attributwerte in Anführungszeichen.</li>
        <li><strong>Gültig (valide):</strong> zusätzlich konform zu einem Schema (DTD oder XSD).</li>
      </ul>
      <p>Gültig setzt wohlgeformt voraus – nicht umgekehrt.</p>

      <h2>DTD vs. XSD</h2>
      <table>
        <thead><tr><th></th><th>DTD</th><th>XSD</th></tr></thead>
        <tbody>
          <tr><td>Syntax</td><td>eigene Grammatik</td><td>selbst XML</td></tr>
          <tr><td>Datentypen</td><td>nur CDATA / PCDATA</td><td>starke Typen (int, date, …)</td></tr>
          <tr><td>Namespaces</td><td>nicht unterstützt</td><td>ja</td></tr>
          <tr><td>Kardinalitäten</td><td>einfach (?, +, *)</td><td>minOccurs/maxOccurs</td></tr>
          <tr><td>Wiederverwendung</td><td>begrenzt</td><td>Restriction / Extension</td></tr>
        </tbody>
      </table>

      <CodeBlock lang="xml" caption="buch.xml">
{`<buch xmlns="http://ap2.de/buch">
  <titel>AP2</titel>
  <jahr>2026</jahr>
</buch>`}
      </CodeBlock>
      <CodeBlock lang="xml" caption="buch.xsd (Ausschnitt)">
{`<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="http://ap2.de/buch"
           xmlns="http://ap2.de/buch"
           elementFormDefault="qualified">
  <xs:element name="buch">
    <xs:complexType><xs:sequence>
      <xs:element name="titel" type="xs:string"/>
      <xs:element name="jahr"  type="xs:gYear"/>
    </xs:sequence></xs:complexType>
  </xs:element>
</xs:schema>`}
      </CodeBlock>

      <Callout variant="tip">
        XSD ist mächtiger als DTD: Datentypen + Namespaces + Wiederverwendung. DTD begegnet dir
        eher in alten Dokumenten / HTML 4.
      </Callout>

      <h2>Parser</h2>
      <ul>
        <li><strong>DOM</strong>: Baum im Speicher, wahlfreier Zugriff – bei großen Dokumenten speicherintensiv.</li>
        <li><strong>SAX</strong>: ereignisbasiert, streamend – speichereffizient.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wann ist ein XML-Dokument «gültig»?",
      options: [
        { id: "a", text: "Wenn es genau ein Wurzelelement besitzt", correct: false },
        { id: "b", text: "Wenn es wohlgeformt ist UND einem Schema (DTD/XSD) entspricht", correct: true },
        { id: "c", text: "Wenn es Namespaces nutzt", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welcher Vorteil hat XSD gegenüber DTD?",
      options: [
        { id: "a", text: "Starke Datentypen und Namespace-Unterstützung", correct: true },
        { id: "b", text: "Kürzere Syntax", correct: false },
        { id: "c", text: "Kein Parser nötig", correct: false },
      ],
    },
  ],
  examTips: [
    "3 XSD-Vorteile gegenüber DTD benennen: Datentypen, Namespaces, Wiederverwendung.",
    "minOccurs=\"0\" = optionales Element.",
    "Namespace-URI muss kein erreichbarer Link sein.",
  ],
  related: ["datenformate", "soap-webservices"],
};
