import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum — LeadPlug",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-24 text-fg-2 hyphens-auto">
          <h1 className="font-display text-[32px] font-semibold tracking-[-0.02em] text-black mb-10">
            Impressum
          </h1>

          <section className="mb-8">
            <h2 className="font-semibold text-black mb-2">Angaben gemäß § 5 DDG</h2>
            <p>Stavros Singoudis</p>
            <p>Unterer Mühlenweg 49</p>
            <p>79114 Freiburg im Breisgau</p>
            <p>Deutschland</p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-black mb-2">Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a href="mailto:kontakt@leadplug.de" className="text-primary underline">
                kontakt@leadplug.de
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-black mb-2">Umsatzsteuer</h2>
            <p>
              Gemäß § 19 UStG wird keine Umsatzsteuer erhoben. Eine
              Umsatzsteuer-Identifikationsnummer liegt daher nicht vor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-black mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>Stavros Singoudis</p>
            <p>Unterer Mühlenweg 49</p>
            <p>79114 Freiburg im Breisgau</p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-black mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
              Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
              entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-black mb-2">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-black mb-2">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Solltest du dennoch auf eine
              Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
