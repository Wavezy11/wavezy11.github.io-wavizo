import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Algemene Voorwaarden | Wavizo",
  description: "Lees de algemene voorwaarden van Wavizo webdesign bureau.",
};

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 bg-[#0A0A0B]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10">
            <h1 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-8">Algemene Voorwaarden</h1>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Definities</h2>
              <p>In deze algemene voorwaarden wordt verstaan onder Wavizo: de opdrachtnemer die bedrijfsmatig webdesign en ontwikkelingsdiensten aanbiedt. Opdrachtgever: de natuurlijke of rechtspersoon met wie Wavizo een overeenkomst sluit.</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Toepasselijkheid</h2>
              <p>Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van Wavizo, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Offertes en aanbiedingen</h2>
              <p>Alle offertes van Wavizo zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld.</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Uitvoering van de overeenkomst</h2>
              <p>Wavizo zal de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren.</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Betaling</h2>
              <p>Betaling dient te geschieden binnen 14 dagen na factuurdatum, op een door Wavizo aan te geven wijze in de valuta waarin is gefactureerd.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
