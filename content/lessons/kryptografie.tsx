import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const kryptografie: Lesson = {
  slug: "kryptografie",
  objectives: [
    "Symmetrische und asymmetrische Verschlüsselung unterscheiden",
    "Hashes und digitale Signaturen einordnen",
    "TLS, Zertifikate und PKI in Grundzügen erklären",
  ],
  body: (
    <div className="prose-content">
      <h2>Symmetrisch vs. asymmetrisch</h2>
      <table>
        <thead>
          <tr><th></th><th>Symmetrisch</th><th>Asymmetrisch</th></tr>
        </thead>
        <tbody>
          <tr><td>Schlüssel</td><td>1 gemeinsamer</td><td>Paar: public + private</td></tr>
          <tr><td>Typische Verfahren</td><td>AES, 3DES</td><td>RSA, ECC</td></tr>
          <tr><td>Geschwindigkeit</td><td>schnell</td><td>langsam</td></tr>
          <tr><td>Schlüssel-Austausch</td><td>Problem</td><td>einfach</td></tr>
        </tbody>
      </table>
      <p>
        In der Praxis kombiniert: Asymmetrisch, um einen symmetrischen Session-Key sicher zu
        übergeben (z. B. TLS-Handshake).
      </p>

      <h2>Hashes</h2>
      <p>
        Einweg-Funktionen: Beliebige Eingabe → fester Hashwert. Nicht umkehrbar. Beispiele: SHA-256,
        SHA-3. MD5 und SHA-1 gelten als <strong>unsicher</strong>.
      </p>
      <Callout variant="tip">
        Hashes prüfen Integrität (Vergleich), speichern Passwörter (gesalzen + gestreckt: bcrypt,
        Argon2) – aber nicht verschlüsseln.
      </Callout>

      <h2>Digitale Signatur</h2>
      <ol>
        <li>Hash der Nachricht bilden.</li>
        <li>Hash mit <em>privatem</em> Schlüssel verschlüsseln → Signatur.</li>
        <li>Empfänger prüft: selbst Hash bilden + Signatur mit <em>public</em> Key entschlüsseln → Vergleich.</li>
      </ol>

      <h2>TLS &amp; Zertifikate</h2>
      <ul>
        <li><strong>PKI:</strong> Public-Key-Infrastruktur – Zertifikate, CAs, Sperrlisten.</li>
        <li><strong>X.509-Zertifikat:</strong> verbindet öffentlichen Schlüssel mit Identität, signiert von einer CA.</li>
        <li><strong>TLS 1.3:</strong> aktueller Standard, perfect forward secrecy, kürzerer Handshake.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Kombination wird typischerweise für HTTPS genutzt?",
      options: [
        { id: "a", text: "Nur symmetrisch.", correct: false },
        { id: "b", text: "Asymmetrisch zum Austausch eines Session-Keys, danach symmetrisch.", correct: true },
        { id: "c", text: "Nur asymmetrisch.", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was prüft eine digitale Signatur?",
      options: [
        { id: "a", text: "Verschlüsselung des Inhalts.", correct: false },
        { id: "b", text: "Authentizität + Integrität der Nachricht.", correct: true },
        { id: "c", text: "Verfügbarkeit des Servers.", correct: false },
      ],
    },
  ],
  examTips: [
    "Public Key = öffentlicher Schlüssel, darf bekannt sein. Private = geheim.",
    "Verschlüsseln mit Empfänger-Public, nur Empfänger kann entschlüsseln.",
    "Signieren mit eigenem Private, jeder kann mit Public prüfen.",
    "SHA-256 als sicheren Hash nennen, MD5 als veraltet.",
  ],
  resources: [
    {
      kind: "video",
      title: "Symmetrische und asymmetrische Verschlüsselung",
      url: "https://www.youtube.com/watch?v=L8NpBZwamUw",
      note: "Grundunterschied beider Verfahren verständlich erklärt.",
    },
    {
      kind: "video",
      title: "Verschlüsselungsverfahren (symmetrisch, asymmetrisch, hybrid)",
      url: "https://www.youtube.com/watch?v=NPHlmQnZhv4",
      note: "Inkl. hybrider Verfahren (wie bei TLS).",
    },
  ],
  related: ["schutzziele", "angriffe", "authentifizierung"],
};
