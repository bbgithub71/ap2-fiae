import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const authentifizierung: Lesson = {
  slug: "authentifizierung",
  objectives: [
    "Authentifizierungsfaktoren benennen und MFA sauber definieren",
    "Zugriffskontrollmodelle (DAC, MAC, RBAC, ABAC) unterscheiden",
    "OAuth 2.0, OIDC, SAML, Kerberos und RADIUS einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Faktoren &amp; MFA</h2>
      <ul>
        <li><strong>Wissen</strong> (Passwort, PIN)</li>
        <li><strong>Besitz</strong> (Token, Smartcard, Phone)</li>
        <li><strong>Inhärenz / Biometrie</strong> (Fingerabdruck, Gesicht)</li>
        <li><strong>Ort</strong> (Geo / IP)</li>
        <li><strong>Verhalten</strong> (Tippmuster)</li>
      </ul>
      <p>
        <strong>MFA</strong> = mindestens zwei <em>unterschiedliche</em> Faktoren. Zwei Passwörter
        sind keine MFA.
      </p>

      <h2>Zugriffskontrollmodelle</h2>
      <ul>
        <li><strong>DAC</strong> (Discretionary): Besitzer vergibt Rechte (klassisches Dateisystem).</li>
        <li><strong>MAC</strong> (Mandatory): System/Labels entscheiden, nicht der Besitzer (militärisch).</li>
        <li><strong>RBAC</strong> (Role-Based): Rechte → Rollen → Nutzer.</li>
        <li><strong>ABAC</strong> (Attribute-Based): Regeln über Attribute (Abteilung, Uhrzeit, Gerät).</li>
      </ul>

      <h2>Protokolle</h2>
      <ul>
        <li><strong>OAuth 2.0</strong>: Autorisierung via Access Token (Bearer).</li>
        <li><strong>OIDC</strong> (OpenID Connect): Authentifizierungsschicht über OAuth 2.0, liefert ein ID-Token (JWT).</li>
        <li><strong>SAML</strong>: XML-basiert, klassisch Enterprise-SSO.</li>
        <li><strong>Kerberos</strong>: Ticket-basiert, Active Directory.</li>
        <li><strong>RADIUS</strong>: AAA für Netzzugang (WLAN, VPN).</li>
      </ul>

      <Callout variant="warn">
        OAuth 2.0 allein ist <strong>keine</strong> Authentifizierung, sondern Autorisierung. Erst
        OIDC (auf OAuth2) liefert die Identität.
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>RBAC ≠ ABAC: Rolle vs. Attribute.</li>
        <li>Authentifizierung = «wer?", Autorisierung = «was darf wer?».</li>
        <li>MFA braucht zwei <em>unterschiedliche</em> Faktoren.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Was ist OIDC?",
      options: [
        { id: "a", text: "XML-basiertes Enterprise-SSO", correct: false, explanation: "Das ist SAML." },
        { id: "b", text: "Authentifizierungsschicht auf OAuth 2.0 mit ID-Token", correct: true },
        { id: "c", text: "Ein Verschlüsselungsprotokoll", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welches Modell arbeitet mit Rollen?",
      options: [
        { id: "a", text: "DAC", correct: false },
        { id: "b", text: "RBAC", correct: true },
        { id: "c", text: "MAC", correct: false },
      ],
    },
  ],
  examTips: [
    "MFA-Beispiele: Passwort + TOTP, Karte + PIN.",
    "OAuth = Autorisierung, OIDC = Authentifizierung. Diese Trennung ist Top-MC-Stoff.",
    "Bei feingranularer Rechtevergabe → ABAC.",
  ],
  resources: [
    {
      kind: "video",
      title: "So funktioniert die Zwei-Faktor-Authentisierung",
      url: "https://www.youtube.com/watch?v=xCCni1Sxe80",
      channel: "BSI",
      note: "Offizielles Video des Bundesamts für Sicherheit in der Informationstechnik.",
    },
    {
      kind: "video",
      title: "Zwei-Faktor-Authentifizierung einfach erklärt",
      url: "https://www.youtube.com/watch?v=Y-u78Jxj5U8",
      note: "Kompakte Einführung in 2FA als Spezialfall von MFA.",
    },
  ],
  related: ["schutzziele", "kryptografie", "dsgvo"],
};
