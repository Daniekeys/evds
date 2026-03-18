import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactInfoStrip from "../components/contact/ContactInfoStrip";
import ContactFormSection from "../components/contact/ContactFormSection";

export const metadata = {
  title: "Contact Us | Everyday Surprises",
  description: "Reach out to our dedicated team today for 24/7 support.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        <ContactHero />
        <ContactInfoStrip />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
