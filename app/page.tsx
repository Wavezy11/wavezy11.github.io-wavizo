import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import LivePreviewPortfolio from "@/components/LivePreviewPortfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import QuoteModalWrapper from "@/components/QuoteModalWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesGrid />
        <LivePreviewPortfolio />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <QuoteModalWrapper />
    </>
  );
}
