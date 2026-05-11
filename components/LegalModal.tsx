"use client";

import { useEffect } from "react";

type LegalType = "impressum" | "datenschutz" | "avv";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-bold tracking-tight text-[18px] text-black mb-3">{title}</h2>
      <div className="text-fg-3 text-[15px] leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function ImpressumContent() {
  return (
    <>
      <section className="mb-8">
        <h2 className="font-semibold text-black mb-2">Angaben gemäß § 5 DDG</h2>
        <p>Stavros Singoudis</p>
        <p>Unterer Mühlenweg 49</p>
        <p>79114 Freiburg im Breisgau</p>
        <p>Deutschland</p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold text-black mb-2">Kontakt</h2>
        <p>E-Mail: <a href="mailto:kontakt@leadplug.de" className="text-primary underline">kontakt@leadplug.de</a></p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold text-black mb-2">Umsatzsteuer</h2>
        <p>Gemäß § 19 UStG wird keine Umsatzsteuer erhoben. Eine Umsatzsteuer-Identifikationsnummer liegt daher nicht vor.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold text-black mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>Stavros Singoudis</p>
        <p>Unterer Mühlenweg 49</p>
        <p>79114 Freiburg im Breisgau</p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold text-black mb-2">Haftung für Inhalte</h2>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold text-black mb-2">Haftung für Links</h2>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
      </section>
      <section>
        <h2 className="font-semibold text-black mb-2">Urheberrecht</h2>
        <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
      </section>
    </>
  );
}

function DatenschutzContent() {
  return (
    <>
      <p className="text-fg-4 text-sm mb-6">Stand: Mai 2026</p>
      <Section title="1. Verantwortlicher">
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
        <p><strong className="text-black">Stavros Singoudis</strong><br />Unterer Mühlenweg 49<br />79114 Freiburg im Breisgau<br />Deutschland<br />E-Mail: <a href="mailto:kontakt@leadplug.de" className="text-primary underline">kontakt@leadplug.de</a></p>
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
        <p>Diese Website verwendet einen Cookie-Consent-Banner. Ihre Einwilligung oder Ablehnung wird im lokalen Speicher Ihres Browsers (localStorage) gespeichert. Es werden keine Tracking-Cookies gesetzt, bevor Sie aktiv eingewilligt haben.</p>
        <p>Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Browser-Cache bzw. den lokalen Speicher Ihres Browsers leeren. Rechtsgrundlage: Art. 6 Abs. 1 lit. c DSGVO i. V. m. Art. 7 DSGVO.</p>
      </Section>
      <Section title="5. Google Tag Manager">
        <p>Wir setzen den Google Tag Manager (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) ein. Der Tag Manager selbst erhebt keine personenbezogenen Daten und setzt keine Cookies. Er lädt andere Analyse-Dienste nur dann, wenn Sie dazu eingewilligt haben.</p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
      </Section>
      <Section title="6. Google Analytics 4">
        <p>Mit Ihrer Einwilligung nutzen wir Google Analytics 4 (Google Ireland Limited) zur Analyse des Nutzungsverhaltens. IP-Adressen werden vor der Speicherung anonymisiert. Wir nutzen Google Consent Mode v2: Ohne Ihre Einwilligung werden keine Analyse-Daten erhoben.</p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit über den Cookie-Banner widerrufen.</p>
      </Section>
      <Section title="7. Microsoft Clarity">
        <p>Mit Ihrer Einwilligung verwenden wir Microsoft Clarity (Microsoft Corporation, USA) zur Erstellung von Heatmaps und Aufzeichnungen von Mausbewegungen und Klickverhalten. Eingaben in Formularfelder werden nicht aufgezeichnet.</p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO. Die Datenübermittlung in die USA erfolgt auf Basis der EU-Standardvertragsklauseln.</p>
      </Section>
      <Section title="8. Das LeadPlug-Widget">
        <p>LeadPlug stellt Handwerksbetrieben ein einbettbares Funnel-Widget zur Verfügung. Das Widget wird als iFrame in die Website des jeweiligen Handwerksbetriebs eingebunden und auf unserer eigenen Infrastruktur betrieben.</p>
        <h3 className="font-semibold text-black pt-2">8.1 Erhobene Daten und Speicherung</h3>
        <p>Interessenten übermitteln am Ende des Funnels aktiv ihre Daten nach ausdrücklicher Einwilligung. Gespeichert werden: Kontaktdaten (Name, E-Mail, Telefon, Adresse) sowie projektbezogene Angaben. Die Daten werden bei Supabase Inc. auf einem Server in Frankfurt am Main gespeichert. Mit Supabase besteht ein Auftragsverarbeitungsvertrag.</p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</p>
        <h3 className="font-semibold text-black pt-2">8.2 E-Mail-Benachrichtigungen</h3>
        <p>Nach Absenden des Formulars erhalten beide Parteien eine automatische E-Mail. Für den E-Mail-Versand nutzen wir Resend (Resend Labs Inc., USA). Mit Resend besteht ein Auftragsverarbeitungsvertrag. Resend ist nach dem EU-U.S. Data Privacy Framework zertifiziert.</p>
        <h3 className="font-semibold text-black pt-2">8.3 Spam- und Missbrauchsschutz</h3>
        <p>Zur Missbrauchsprävention speichern wir die IP-Adresse des Absenders ausschließlich zur technischen Ratenbegrenzung. Zusätzlich setzen wir ein Honeypot-Verfahren ein.</p>
        <h3 className="font-semibold text-black pt-2">8.4 LeadPlug als Auftragsverarbeiter</h3>
        <p>Soweit das Widget auf der Website eines Handwerksbetriebs eingebunden ist, handelt LeadPlug als Auftragsverarbeiter im Sinne von Art. 28 DSGVO.</p>
      </Section>
      <Section title="9. Kontaktaufnahme per E-Mail">
        <p>Wenn Sie uns per E-Mail kontaktieren, werden die übermittelten Daten zur Bearbeitung Ihrer Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht.</p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
      </Section>
      <Section title="10. Datenübermittlung in Drittländer">
        <p>Betroffene Dienstleister: Vercel Inc. (Hosting), Resend Labs Inc. (E-Mail-Versand), Google LLC (Analytics), Microsoft Corporation (Clarity). Die Übermittlung erfolgt auf Basis des EU-U.S. Data Privacy Frameworks und/oder der EU-Standardvertragsklauseln.</p>
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
        <p>Zur Ausübung Ihrer Rechte wenden Sie sich an <a href="mailto:kontakt@leadplug.de" className="text-primary underline">kontakt@leadplug.de</a>:</p>
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
        <p><strong className="text-black">Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW)</strong><br />Königstraße 10a, 70173 Stuttgart<br /><a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.baden-wuerttemberg.datenschutz.de</a></p>
      </Section>
    </>
  );
}

function AvvContent() {
  return (
    <>
      <p className="text-fg-4 text-sm mb-2">Stand: Mai 2026 · Version 1.0</p>
      <p className="text-fg-3 text-[15px] leading-relaxed mb-2">Dieser Vertrag regelt die datenschutzrechtlichen Verpflichtungen zwischen Ihnen als Verantwortlichem und LeadPlug als Auftragsverarbeiter gemäß Art. 28 DSGVO.</p>
      <p className="text-fg-3 text-[15px] leading-relaxed"><strong className="text-black">Gültigkeit:</strong> Durch die Erstellung eines Accounts und die Nutzung der Dienste von LeadPlug wird dieser AVV automatisch Bestandteil des Nutzungsvertrages.</p>
      <Section title="1. Gegenstand und Dauer der Verarbeitung">
        <p>Gegenstand dieses Vertrages ist die Verarbeitung personenbezogener Daten durch LeadPlug im Auftrag des Kunden im Rahmen der Nutzung des LeadPlug-Funnel-Widgets. Die Laufzeit dieses AVV entspricht der Laufzeit des zugrundeliegenden Nutzungsvertrages.</p>
      </Section>
      <Section title="2. Art und Zweck der Verarbeitung">
        <ul className="list-disc list-inside space-y-1 ml-1">
          <li>Entgegennahme und Speicherung von Interessentenanfragen über das LeadPlug-Widget</li>
          <li>Automatisierter Versand von Benachrichtigungs-E-Mails</li>
          <li>Speicherung technischer Metadaten (IP-Adresse) zur Missbrauchsprävention</li>
        </ul>
        <p>Zweck der Verarbeitung ist ausschließlich die Leadgenerierung für den Verantwortlichen.</p>
      </Section>
      <Section title="3. Art der Daten und Kategorien betroffener Personen">
        <p><strong className="text-black">Betroffene Personen:</strong> Interessenten, die das Funnel-Widget ausfüllen.</p>
        <ul className="list-disc list-inside space-y-1 ml-1">
          <li>Kontaktdaten: Name, E-Mail-Adresse, Telefonnummer, postalische Adresse</li>
          <li>Projektbezogene Angaben abhängig vom Funnel-Typ</li>
          <li>Technische Metadaten: IP-Adresse (ausschließlich zur Spam-Prävention)</li>
        </ul>
        <p>Es werden keine besonderen Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO verarbeitet.</p>
      </Section>
      <Section title="4. Pflichten des Auftragsverarbeiters">
        <p>LeadPlug verpflichtet sich, die personenbezogenen Daten ausschließlich auf dokumentierte Weisung des Verantwortlichen zu verarbeiten. Bei Datenpannen (Art. 33 DSGVO) informiert der Auftragsverarbeiter den Verantwortlichen unverzüglich, spätestens innerhalb von 72 Stunden.</p>
      </Section>
      <Section title="5. Weisungsrecht des Verantwortlichen">
        <p>Der Verantwortliche ist berechtigt, dem Auftragsverarbeiter jederzeit Weisungen zu erteilen. Weisungen erfolgen per E-Mail an <a href="mailto:kontakt@leadplug.de" className="text-primary underline">kontakt@leadplug.de</a>.</p>
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
              <tr><td className="py-2 pr-4">Vercel Inc.</td><td className="py-2 pr-4">Hosting</td><td className="py-2">USA / weltweit (CDN)</td></tr>
              <tr><td className="py-2 pr-4">Supabase Inc.</td><td className="py-2 pr-4">Datenbankspeicherung</td><td className="py-2">USA / Frankfurt am Main (Daten)</td></tr>
              <tr><td className="py-2 pr-4">Resend Labs Inc.</td><td className="py-2 pr-4">E-Mail-Versand</td><td className="py-2">USA</td></tr>
            </tbody>
          </table>
        </div>
      </Section>
      <Section title="7. Technische und organisatorische Maßnahmen (TOMs)">
        <ul className="list-disc list-inside space-y-1 ml-1">
          <li><strong className="text-black">Verschlüsselung der Übertragung:</strong> Alle Datenübertragungen erfolgen ausschließlich über TLS/HTTPS.</li>
          <li><strong className="text-black">Verschlüsselung der Speicherung:</strong> AES-256 at rest (Supabase).</li>
          <li><strong className="text-black">Zugangs- und Zugriffskontrolle:</strong> Zugriff auf autorisierte Systeme und Personen beschränkt.</li>
          <li><strong className="text-black">Missbrauchsprävention:</strong> IP-basiertes Rate-Limiting und Honeypot-Verfahren.</li>
          <li><strong className="text-black">EU-Datenhaltung:</strong> Alle Formulardaten werden auf Servern in Frankfurt am Main gespeichert.</li>
        </ul>
      </Section>
      <Section title="8. Laufzeit und Datenlöschung bei Vertragsende">
        <p>Nach Beendigung des Nutzungsvertrages löscht der Auftragsverarbeiter alle personenbezogenen Daten innerhalb von 30 Tagen. Anfragen an <a href="mailto:kontakt@leadplug.de" className="text-primary underline">kontakt@leadplug.de</a>.</p>
      </Section>
      <p className="mt-12 text-fg-4 text-sm border-t border-border pt-6">Bei Fragen zu diesem AVV: <a href="mailto:kontakt@leadplug.de" className="text-primary underline">kontakt@leadplug.de</a></p>
    </>
  );
}

const titles: Record<LegalType, string> = {
  impressum: "Impressum",
  datenschutz: "Datenschutzerklärung",
  avv: "Auftragsverarbeitungsvertrag (AVV)",
};

export default function LegalModal({
  type,
  onClose,
}: {
  type: LegalType | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!type) return;
    // ESC key
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    // Back button: push state so back closes modal instead of leaving page
    window.history.pushState({ modal: true }, "");
    const onPop = () => onClose();
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", onPop);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full rounded-t-2xl sm:max-w-3xl sm:rounded-2xl shadow-2xl flex flex-col h-dvh sm:h-auto sm:max-h-[85vh]">
        {/* Drag handle — mobile only */}
        <div className="flex justify-center pt-3 sm:hidden shrink-0">
          <div className="w-10 h-1 rounded-full bg-slate-200" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
          <h1 className="font-extrabold tracking-tight text-[20px] text-black min-w-0 mr-3 leading-tight">
            {titles[type]}
          </h1>
          <button
            onClick={onClose}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-700"
            aria-label="Schließen"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-6 py-6 text-fg-2 hyphens-auto text-[15px] leading-relaxed">
          {type === "impressum" && <ImpressumContent />}
          {type === "datenschutz" && <DatenschutzContent />}
          {type === "avv" && <AvvContent />}
        </div>
      </div>
    </div>
  );
}
