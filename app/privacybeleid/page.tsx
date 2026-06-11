import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacybeleid | Wavizo",
  description: "Lees ons privacybeleid. Wij gaan zorgvuldig om met uw persoonlijke gegevens.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 bg-[#0A0A0B]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10">
            <h1 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-8">Privacybeleid</h1>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Inleiding</h2>
              <p>Wavizo respecteert de privacy van alle gebruikers van haar site en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld.</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Gegevens die wij verzamelen</h2>
              <p>Wanneer u ons contactformulier invult, vragen wij om persoonlijke gegevens zoals uw naam en e-mailadres om uw aanvraag te kunnen verwerken.</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Hoe wij uw gegevens gebruiken</h2>
              <p>Wij gebruiken uw gegevens uitsluitend om contact met u op te nemen aangaande uw projectaanvraag of vragen. Wij verkopen uw gegevens nooit aan derden.</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Beveiliging</h2>
              <p>Wij nemen de bescherming van uw gegevens serieus en nemen passende maatregelen om misbruik, verlies en onbevoegde toegang tegen te gaan.</p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Contact</h2>
              <p>Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact met ons op.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
