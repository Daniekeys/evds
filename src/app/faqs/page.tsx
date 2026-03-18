import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import FAQAccordionSection from "../components/faqs/FAQAccordionSection";
import StillHaveQuestions from "../components/faqs/StillHaveQuestions";

export const metadata = {
  title: "FAQs | Everyday Surprises",
  description: "Frequently Asked Questions about Everyday Surprises.",
};

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        
        {/* Simple Hero Section */}
        <section className="bg-[#0B214B] py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Everything you need to know about Everyday Surprises
            </p>
          </div>
        </section>

        <FAQAccordionSection />
        <StillHaveQuestions />

      </main>
      <Footer />
    </div>
  );
}
