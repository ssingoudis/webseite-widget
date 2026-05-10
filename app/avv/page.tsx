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
            als Verantwortlichem und LeadPlug als Auftragsverarbeiter gemäß Art. 28 DSGVO.
          </p>
          <p className="text-fg-3 text-[15px] leading-relaxed">
            <strong className="text-black">Gültigkeit:</strong> Durch die Erstellung eines
            Accounts und die Nutzung der Dienste von LeadPlug wird dieser AVV automatisch
            Bestandteil des Nutzungsvertrages. Ein separates unterzeichnetes Dokument ist
            nicht erforderlich.
          </p>

          <Section title="1. Gegenstand und Dauer der Verarbeitung">
            <p>Gegenstand dieses Vertrages ist die Verarbeitung personenbezogener Daten durch LeadPlug im Auftrag des Kunden im Rahmen der Nutzung des LeadPlug-Funnel-Widgets. Der Auftragsverarbeiter verarbeitet personenbezogene Daten ausschließlich zur Erbringung der vertraglich vereinbarten Leistungen.</p>
            <p>Die Laufzeit dieses AVV entspricht der Laufzeit des zugrundeliegenden Nutzungsvertrages.</p>
          </Section>

          <Section title="2. Art und Zweck der Verarbeitung">
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>Entgegennahme und Speicherung von Interessentenanfragen über das LeadPlug-Widget</li>
              <li>Automatisierter Versand von Benachrichtigungs-E-Mails</li>
              <li>Speicherung technischer Metadaten (IP-Adresse) zur Missbrauchsprävention</li>
            </ul>
            <p>Zweck der Verarbeitung ist ausschließlich die Leadgenerierung für den Verantwortlichen. Eine Verarbeitung für eigene Zwecke des Auftragsverarbeiters findet nicht statt.</p>
          </Section>

          <Section title="3. Art der Daten und Kategorien betroffener Personen">
            <p><strong className="text-black">Betroffene Personen:</strong> Interessenten, die das Funnel-Widget des Verantwortlichen ausfüllen.</p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>Kontaktdaten: Name, E-Mail-Adresse, Telefonnummer, postalische Adresse</li>
              <li>Projektbezogene Angaben abhängig vom Funnel-Typ</li>
              <li>Technische Metadaten: IP-Adresse (ausschließlich zur Spam-Prävention)</li>
            </ul>
            <p>Es werden keine besonderen Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO verarbeitet.</p>
          </Section>

          <Section title="4. Pflichten des Auftragsverarbeiters">
            <p>LeadPlug verpflichtet sich, die personenbezogenen Daten ausschließlich auf dokumentierte Weisung des Verantwortlichen zu verarbeiten. Bei Datenpannen (Art. 33 DSGVO) informiert der Auftragsverarbeiter den Verantwortlichen unverzüglich, spätestens innerhalb von 72 Stunden nach Bekanntwerden.</p>
          </Section>

          <Section title="5. Weisungsrecht des Verantwortlichen">
            <p>Der Verantwortliche ist berechtigt, dem Auftragsverarbeiter jederzeit Weisungen zur Verarbeitung personenbezogener Daten zu erteilen. Weisungen erfolgen per E-Mail an{" "}
              <a href="mailto:kontakt@leadplug.de" className="text-primary underline">kontakt@leadplug.de</a>.
            </p>
          </Section>

          <Section title="6. Einsatz von Unterauftragsverarbeitern">
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
                  <tr><td className="py-2 pr-4">Vercel Inc.</td><td className="py-2 pr-4">Hosting der Widget-Infrastruktur</td><td className="py-2">USA / weltweit (CDN)</td></tr>
                  <tr><td className="py-2 pr-4">Supabase Inc.</td><td className="py-2 pr-4">Datenbankspeicherung</td><td className="py-2">USA (Unternehmen) / Frankfurt am Main (Daten)</td></tr>
                  <tr><td className="py-2 pr-4">Resend Labs Inc.</td><td className="py-2 pr-4">E-Mail-Versand</td><td className="py-2">USA</td></tr>
                </tbody>
              </table>
            </div>
            <p>Die Übermittlung personenbezogener Daten an Unterauftragsverarbeiter in den USA erfolgt auf Basis des EU-U.S. Data Privacy Frameworks und/oder der EU-Standardvertragsklauseln.</p>
          </Section>

          <Section title="7. Technische und organisatorische Maßnahmen (TOMs)">
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li><strong className="text-black">Verschlüsselung der Übertragung:</strong> Alle Datenübertragungen erfolgen ausschließlich über TLS/HTTPS.</li>
              <li><strong className="text-black">Verschlüsselung der Speicherung:</strong> Daten werden verschlüsselt at rest gespeichert (Supabase, AES-256).</li>
              <li><strong className="text-black">Zugangs- und Zugriffskontrolle:</strong> Zugriff auf autorisierte Systeme und Personen beschränkt.</li>
              <li><strong className="text-black">Missbrauchsprävention:</strong> IP-basiertes Rate-Limiting und Honeypot-Verfahren.</li>
              <li><strong className="text-black">EU-Datenhaltung:</strong> Alle Formulardaten werden auf Servern in Frankfurt am Main gespeichert.</li>
            </ul>
          </Section>

          <Section title="8. Laufzeit und Datenlöschung bei Vertragsende">
            <p>Nach Beendigung des Nutzungsvertrages löscht der Auftragsverarbeiter alle personenbezogenen Daten innerhalb von 30 Tagen. Anfragen zur Datenlöschung oder zum Datenexport sind per E-Mail an{" "}
              <a href="mailto:kontakt@leadplug.de" className="text-primary underline">kontakt@leadplug.de</a>{" "}
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
