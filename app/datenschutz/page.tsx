import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — LeadPlug",
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

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-24 hyphens-auto">
          <h1 className="font-extrabold tracking-tight text-[32px] text-black mb-2">
            Datenschutzerklärung
          </h1>
          <p className="text-fg-4 text-sm mb-6">Stand: Mai 2026</p>

          <Section title="1. Verantwortlicher">
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
            <p>
              <strong className="text-black">Stavros Singoudis</strong><br />
              Unterer Mühlenweg 49<br />
              79114 Freiburg im Breisgau<br />
              Deutschland<br />
              E-Mail:{" "}
              <a href="mailto:kontakt@leadplug.de" className="text-primary underline">
                kontakt@leadplug.de
              </a>
            </p>
          </Section>

          <Section title="2. Überblick der verarbeiteten Daten">
            <p>Im Rahmen des Betriebs dieser Website und des LeadPlug-Widgets verarbeiten wir folgende Kategorien personenbezogener Daten:</p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>Verbindungsdaten (IP-Adresse, Zugriffszeit, aufgerufene Seiten)</li>
              <li>Nutzungsdaten (Seitenaufrufe, Verweildauer, Interaktionen)</li>
              <li>Kontaktdaten und Projektdaten, die Interessenten über das LeadPlug-Widget übermitteln</li>
            </ul>
          </Section>

          <Section title="3. Hosting (Vercel)">
            <p>Diese Website sowie die LeadPlug-Widget-Anwendung werden bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA gehostet. Beim Aufruf unserer Seiten verarbeitet Vercel technisch notwendige Verbindungsdaten. Diese Daten werden in Serverprotokollen kurzfristig gespeichert und dienen ausschließlich der Sicherstellung des Betriebs.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Mit Vercel besteht ein Auftragsverarbeitungsvertrag auf Basis der EU-Standardvertragsklauseln (SCC). Vercel ist zudem nach dem EU-U.S. Data Privacy Framework zertifiziert.</p>
          </Section>

          <Section title="4. Cookies und Einwilligungsverwaltung">
            <p>Diese Website verwendet einen Cookie-Consent-Banner. Ihre Einwilligung oder Ablehnung wird im lokalen Speicher Ihres Browsers (localStorage) gespeichert, sodass die Auswahl bei einem erneuten Besuch bekannt ist. Es werden keine Tracking-Cookies gesetzt, bevor Sie aktiv eingewilligt haben.</p>
            <p>Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Browser-Cache bzw. den lokalen Speicher Ihres Browsers leeren. Rechtsgrundlage: Art. 6 Abs. 1 lit. c DSGVO i. V. m. Art. 7 DSGVO.</p>
          </Section>

          <Section title="5. Google Tag Manager">
            <p>Wir setzen den Google Tag Manager (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) ein. Der Tag Manager selbst erhebt keine personenbezogenen Daten und setzt keine Cookies. Er lädt andere Analyse-Dienste nur dann, wenn Sie dazu eingewilligt haben.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
          </Section>

          <Section title="6. Google Analytics 4">
            <p>Mit Ihrer Einwilligung nutzen wir Google Analytics 4 (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) zur Analyse des Nutzungsverhaltens auf unserer Website. IP-Adressen werden von Google vor der Speicherung anonymisiert. Wir nutzen Google Consent Mode v2: Ohne Ihre Einwilligung werden keine Analyse-Daten erhoben.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO. Die Datenübermittlung an Google in den USA erfolgt auf Basis des EU-U.S. Data Privacy Frameworks sowie der EU-Standardvertragsklauseln. Sie können Ihre Einwilligung jederzeit über den Cookie-Banner widerrufen.</p>
          </Section>

          <Section title="7. Microsoft Clarity">
            <p>Mit Ihrer Einwilligung verwenden wir Microsoft Clarity (Microsoft Corporation, One Microsoft Way, Redmond, WA 98052, USA) zur Erstellung von Heatmaps und Aufzeichnungen von Mausbewegungen und Klickverhalten. Dabei werden keine Eingaben in Formularfelder aufgezeichnet.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO. Die Datenübermittlung in die USA erfolgt auf Basis der EU-Standardvertragsklauseln. Sie können Ihre Einwilligung jederzeit über den Cookie-Banner widerrufen.</p>
          </Section>

          <Section title="8. Das LeadPlug-Widget">
            <p>LeadPlug stellt Handwerksbetrieben ein einbettbares Funnel-Widget zur Verfügung, das als iFrame in die Website des jeweiligen Handwerksbetriebs eingebunden und auf unserer eigenen Infrastruktur betrieben wird.</p>

            <h3 className="font-semibold text-black pt-2">8.1 Erhobene Daten und Speicherung</h3>
            <p>Interessenten übermitteln am Ende des Funnels aktiv ihre Daten nach ausdrücklicher Einwilligung. Gespeichert werden:</p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>Kontaktdaten: Name, E-Mail-Adresse, Telefonnummer, Adresse</li>
              <li>Projektbezogene Angaben abhängig vom Funnel-Typ</li>
            </ul>
            <p>Die Daten werden bei Supabase Inc. auf einem Server in Frankfurt am Main (EU) gespeichert. Mit Supabase besteht ein Auftragsverarbeitungsvertrag. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</p>

            <h3 className="font-semibold text-black pt-2">8.2 E-Mail-Benachrichtigungen</h3>
            <p>Nach Absenden des Formulars erhalten beide Parteien eine automatische E-Mail. Für den E-Mail-Versand nutzen wir Resend (Resend Labs Inc., USA). Mit Resend besteht ein Auftragsverarbeitungsvertrag. Resend ist nach dem EU-U.S. Data Privacy Framework zertifiziert. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</p>

            <h3 className="font-semibold text-black pt-2">8.3 Spam- und Missbrauchsschutz</h3>
            <p>Zur Missbrauchsprävention speichern wir die IP-Adresse des Absenders ausschließlich zur technischen Ratenbegrenzung. Zusätzlich setzen wir ein Honeypot-Verfahren ein. Rechtsgrundlage: Art. 6 Abs. 1 lit. a und lit. f DSGVO.</p>

            <h3 className="font-semibold text-black pt-2">8.4 LeadPlug als Auftragsverarbeiter</h3>
            <p>Soweit das Widget auf der Website eines Handwerksbetriebs eingebunden ist, handelt LeadPlug als Auftragsverarbeiter im Sinne von Art. 28 DSGVO.</p>
          </Section>

          <Section title="9. Kontaktaufnahme per E-Mail">
            <p>Wenn Sie uns per E-Mail kontaktieren, werden die übermittelten Daten zur Bearbeitung Ihrer Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
          </Section>

          <Section title="10. Datenübermittlung in Drittländer">
            <p>Betroffene Dienstleister: Vercel Inc. (Hosting), Resend Labs Inc. (E-Mail-Versand), Google LLC (Analytics), Microsoft Corporation (Clarity). Die Übermittlung erfolgt auf Basis des EU-U.S. Data Privacy Frameworks und/oder der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).</p>
          </Section>

          <Section title="11. Speicherdauer">
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>Server-Logs (Vercel): wenige Tage, automatisch überschrieben</li>
              <li>Funnel-Anfragen (Supabase): für die Dauer der Geschäftsbeziehung</li>
              <li>IP-Adressen für Spam-Schutz: maximal 30 Tage</li>
              <li>Google Analytics: 14 Monate</li>
              <li>E-Mail-Korrespondenz: bis zu 3 Jahre nach letztem Kontakt</li>
            </ul>
          </Section>

          <Section title="12. Ihre Rechte als betroffene Person">
            <p>Zur Ausübung Ihrer Rechte wenden Sie sich an{" "}
              <a href="mailto:kontakt@leadplug.de" className="text-primary underline">kontakt@leadplug.de</a>:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
          </Section>

          <Section title="13. Beschwerderecht bei der Aufsichtsbehörde">
            <p>
              <strong className="text-black">Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW)</strong><br />
              Königstraße 10a, 70173 Stuttgart<br />
              <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                www.baden-wuerttemberg.datenschutz.de
              </a>
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
