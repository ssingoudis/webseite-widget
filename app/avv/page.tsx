import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Auftragsverarbeitungsvertrag (AVV) — LeadPlug",
  robots: { index: false },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-bold tracking-tight text-[18px] text-black mb-3">{title}</h2>
      <div className="text-fg-3 text-[15px] leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function AvvPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-24 hyphens-auto">
          <h1 className="font-extrabold tracking-tight text-[32px] text-black mb-2">
            Auftragsverarbeitungsvertrag (AVV)
          </h1>
          <p className="text-fg-4 text-sm mb-2">Stand: Mai 2026 · Version 1.0</p>
          <p className="text-fg-3 text-[15px] leading-relaxed mb-2">
            Dieser Vertrag regelt die datenschutzrechtlichen Verpflichtungen zwischen Ihnen
            als Verantwortlichem und LeadPlug als Auftragsverarbeiter gemäß Art. 28
            Datenschutz-Grundverordnung (DSGVO).
          </p>
          <p className="text-fg-3 text-[15px] leading-relaxed">
            <strong className="text-black">Gültigkeit:</strong> Durch die Erstellung eines
            Accounts und die Nutzung der Dienste von LeadPlug wird dieser AVV automatisch
            Bestandteil des Nutzungsvertrages. Ein separates unterzeichnetes Dokument ist
            nicht erforderlich.
          </p>

          <Section title="1. Gegenstand und Dauer der Verarbeitung">
            <p>
              Gegenstand dieses Vertrages ist die Verarbeitung personenbezogener Daten durch
              LeadPlug (nachfolgend „Auftragsverarbeiter") im Auftrag des Kunden (nachfolgend
              „Verantwortlicher") im Rahmen der Nutzung des LeadPlug-Funnel-Widgets.
            </p>
            <p>
              Der Auftragsverarbeiter verarbeitet personenbezogene Daten ausschließlich zur
              Erbringung der vertraglich vereinbarten Leistungen: Betrieb des einbettbaren
              Funnel-Widgets, Speicherung eingehender Anfragen und automatisierter Versand
              von Benachrichtigungs-E-Mails.
            </p>
            <p>
              Die Laufzeit dieses AVV entspricht der Laufzeit des zugrundeliegenden
              Nutzungsvertrages. Mit Beendigung des Nutzungsvertrages endet auch dieser AVV,
              unbeschadet der Regelungen zur Datenlöschung in Abschnitt 8.
            </p>
          </Section>

          <Section title="2. Art und Zweck der Verarbeitung">
            <p>Die Verarbeitung umfasst folgende Tätigkeiten:</p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>
                Entgegennahme und Speicherung von Interessentenanfragen, die über das
                LeadPlug-Widget übermittelt werden
              </li>
              <li>
                Automatisierter Versand von Benachrichtigungs-E-Mails an den Verantwortlichen
                und Eingangsbestätigungen an den Interessenten
              </li>
              <li>
                Speicherung technischer Metadaten (IP-Adresse) zur Missbrauchsprävention
              </li>
            </ul>
            <p>
              Zweck der Verarbeitung ist ausschließlich die Leadgenerierung für den
              Verantwortlichen. Eine Verarbeitung für eigene Zwecke des Auftragsverarbeiters
              findet nicht statt.
            </p>
          </Section>

          <Section title="3. Art der Daten und Kategorien betroffener Personen">
            <p>
              <strong className="text-black">Betroffene Personen:</strong> Interessenten
              (natürliche Personen), die das Funnel-Widget des Verantwortlichen ausfüllen.
            </p>
            <p>
              <strong className="text-black">Kategorien personenbezogener Daten:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>
                Kontaktdaten: Name, E-Mail-Adresse, Telefonnummer, postalische Adresse
              </li>
              <li>
                Projektbezogene Angaben: abhängig vom Funnel-Typ des Verantwortlichen
                (z. B. Gebäudetyp, gewünschte Leistungen, Materialwunsch, Zeitrahmen)
              </li>
              <li>
                Technische Metadaten: IP-Adresse (ausschließlich zur Spam-Prävention)
              </li>
            </ul>
            <p>
              Es werden keine besonderen Kategorien personenbezogener Daten im Sinne von
              Art. 9 DSGVO verarbeitet.
            </p>
          </Section>

          <Section title="4. Pflichten des Auftragsverarbeiters">
            <p>
              LeadPlug verpflichtet sich, die personenbezogenen Daten ausschließlich auf
              dokumentierte Weisung des Verantwortlichen zu verarbeiten, es sei denn, eine
              gesetzliche Verpflichtung erfordert eine anderweitige Verarbeitung. In diesem
              Fall informiert der Auftragsverarbeiter den Verantwortlichen vor der
              Verarbeitung, sofern dies rechtlich zulässig ist.
            </p>
            <p>Der Auftragsverarbeiter stellt sicher, dass:</p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>
                alle zur Verarbeitung befugten Personen zur Vertraulichkeit verpflichtet
                sind oder einer gesetzlichen Verschwiegenheitspflicht unterliegen
              </li>
              <li>
                die erforderlichen technischen und organisatorischen Maßnahmen gemäß
                Art. 32 DSGVO getroffen werden (siehe Abschnitt 7)
              </li>
              <li>
                er den Verantwortlichen bei der Erfüllung von Anfragen betroffener Personen
                (Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit)
                unterstützt
              </li>
              <li>
                er den Verantwortlichen bei der Einhaltung seiner Pflichten nach Art. 32–36
                DSGVO unterstützt (Sicherheit, Meldepflichten, Datenschutz-Folgenabschätzung)
              </li>
              <li>
                er nach Wahl des Verantwortlichen alle personenbezogenen Daten nach
                Beendigung des Vertrages löscht oder zurückgibt und vorhandene Kopien
                vernichtet, sofern keine gesetzliche Aufbewahrungspflicht besteht
              </li>
              <li>
                er dem Verantwortlichen alle erforderlichen Informationen zur Verfügung
                stellt, um die Einhaltung der in Art. 28 DSGVO niedergelegten Pflichten
                nachzuweisen, und Überprüfungen — einschließlich Inspektionen — ermöglicht
              </li>
            </ul>
            <p>
              Bei Datenpannen (Art. 33 DSGVO) informiert der Auftragsverarbeiter den
              Verantwortlichen unverzüglich, spätestens innerhalb von 72 Stunden nach
              Bekanntwerden.
            </p>
          </Section>

          <Section title="5. Weisungsrecht des Verantwortlichen">
            <p>
              Der Verantwortliche ist berechtigt, dem Auftragsverarbeiter jederzeit
              Weisungen zur Verarbeitung personenbezogener Daten zu erteilen. Weisungen
              erfolgen in der Regel per E-Mail an{" "}
              <a href="mailto:kontakt@leadplug.de" className="text-primary underline">
                kontakt@leadplug.de
              </a>.
            </p>
            <p>
              Hält der Auftragsverarbeiter eine Weisung für einen Verstoß gegen die DSGVO
              oder andere datenschutzrechtliche Vorschriften, teilt er dies dem
              Verantwortlichen unverzüglich mit. Der Auftragsverarbeiter ist berechtigt,
              die Ausführung der betreffenden Weisung bis zur Bestätigung durch den
              Verantwortlichen auszusetzen.
            </p>
          </Section>

          <Section title="6. Einsatz von Unterauftragsverarbeitern">
            <p>
              Der Auftragsverarbeiter ist berechtigt, folgende Unterauftragsverarbeiter
              einzusetzen. Diese wurden sorgfältig ausgewählt und sind vertraglich zur
              Einhaltung der DSGVO verpflichtet:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-2">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-black">Anbieter</th>
                    <th className="text-left py-2 pr-4 font-semibold text-black">Zweck</th>
                    <th className="text-left py-2 font-semibold text-black">Sitz / Datenstandort</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-2 pr-4">Vercel Inc.</td>
                    <td className="py-2 pr-4">Hosting der Widget-Infrastruktur</td>
                    <td className="py-2">USA / weltweit (CDN)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Supabase Inc.</td>
                    <td className="py-2 pr-4">Datenbankspeicherung</td>
                    <td className="py-2">USA (Unternehmen) / Frankfurt am Main (Daten)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Resend Labs Inc.</td>
                    <td className="py-2 pr-4">E-Mail-Versand</td>
                    <td className="py-2">USA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Die Übermittlung personenbezogener Daten an Unterauftragsverarbeiter in den
              USA erfolgt auf Basis des EU-U.S. Data Privacy Frameworks und/oder der
              EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
            </p>
            <p>
              Der Auftragsverarbeiter informiert den Verantwortlichen über beabsichtigte
              Änderungen hinsichtlich der Hinzuziehung neuer oder der Ersetzung bestehender
              Unterauftragsverarbeiter. Der Verantwortliche hat das Recht, Änderungen
              innerhalb von 14 Tagen nach Benachrichtigung schriftlich zu widersprechen.
            </p>
          </Section>

          <Section title="7. Technische und organisatorische Maßnahmen (TOMs)">
            <p>
              Der Auftragsverarbeiter trifft gemäß Art. 32 DSGVO folgende Maßnahmen zum
              Schutz der verarbeiteten Daten:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>
                <strong className="text-black">Verschlüsselung der Übertragung:</strong>{" "}
                Alle Datenübertragungen erfolgen ausschließlich über TLS/HTTPS.
              </li>
              <li>
                <strong className="text-black">Verschlüsselung der Speicherung:</strong>{" "}
                Daten in der Datenbank werden verschlüsselt at rest gespeichert (Supabase,
                AES-256).
              </li>
              <li>
                <strong className="text-black">Zugangs- und Zugriffskontrolle:</strong>{" "}
                Zugriff auf die Datenbank ist auf autorisierte Systeme und Personen
                beschränkt. Zugangsdaten werden nicht im Klartext gespeichert.
              </li>
              <li>
                <strong className="text-black">Missbrauchsprävention:</strong>{" "}
                IP-basiertes Rate-Limiting und Honeypot-Verfahren schützen vor automatisierten
                Angriffen und Masseneingaben.
              </li>
              <li>
                <strong className="text-black">Einwilligungsmanagement:</strong>{" "}
                Personenbezogene Daten werden erst nach ausdrücklicher Einwilligung der
                betroffenen Person am Ende des Funnel-Prozesses gespeichert.
              </li>
              <li>
                <strong className="text-black">Datenminimierung:</strong>{" "}
                Es werden ausschließlich die für den jeweiligen Funnel-Typ erforderlichen
                Daten erhoben.
              </li>
              <li>
                <strong className="text-black">EU-Datenhaltung:</strong>{" "}
                Alle Formulardaten werden auf Servern in Frankfurt am Main (EU) gespeichert.
              </li>
            </ul>
            <p>
              Auf Anfrage stellt der Auftragsverarbeiter dem Verantwortlichen eine
              detaillierte TOM-Dokumentation zur Verfügung.
            </p>
          </Section>

          <Section title="8. Laufzeit und Datenlöschung bei Vertragsende">
            <p>
              Dieser AVV tritt mit Abschluss des Nutzungsvertrages in Kraft und endet
              automatisch mit dessen Beendigung.
            </p>
            <p>
              Nach Beendigung des Nutzungsvertrages löscht der Auftragsverarbeiter alle
              personenbezogenen Daten des Verantwortlichen innerhalb von 30 Tagen, sofern
              der Verantwortliche nicht ausdrücklich eine Rückgabe der Daten (als
              strukturierter Datenexport) verlangt. Gesetzliche Aufbewahrungspflichten
              bleiben unberührt.
            </p>
            <p>
              Anfragen zur Datenlöschung oder zum Datenexport sind per E-Mail an{" "}
              <a href="mailto:kontakt@leadplug.de" className="text-primary underline">
                kontakt@leadplug.de
              </a>{" "}
              zu richten.
            </p>
          </Section>

          <p className="mt-12 text-fg-4 text-sm border-t border-border pt-6">
            Bei Fragen zu diesem AVV wenden Sie sich an:{" "}
            <a href="mailto:kontakt@leadplug.de" className="text-primary underline">
              kontakt@leadplug.de
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
