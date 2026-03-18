import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import DownloadBanner from "../components/landing/DownloadBanner";
import HowItWorksHero from "../components/how-it-works/HowItWorksHero";
import StepSection from "../components/how-it-works/StepSection";
import HowItWorksFeatures from "../components/how-it-works/HowItWorksFeatures";

export const metadata = {
  title: "How It Works | Everyday Surprises",
  description: "Learn how to plan, contribute, and celebrate with Everyday Surprises.",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        <HowItWorksHero />
        
        <div className="flex flex-col gap-0 py-16">
          <StepSection
            stepNumber="1"
            title="Create the birthday plan"
            description="Down on the app set up the birthday parameters in seconds. Simply add the celebrants name, date and set a celebration goal right inside their fingertips."
            bullets={[
              "Set your birthday goals",
              "Get account link to share for your birthday",
              "Invite friends straight from your Whatsapp list",
            ]}
            imageSrc="/images/how-it-works/create-birthday-image.png"
            imageAlt="Create Birthday App Screen"
            imagePosition="left"
            buttonText="Start a plan"
            bgColor="bg-[#FF334B]"
          />

          <StepSection
            stepNumber="2"
            title="Invite Friends & Family to Contribute"
            description="Share seamlessly to your Contacts, WhatsApp, SMS, or Social media. Your friends and family can contribute quickly to your plan"
            bullets={[
              "Request funds via transfer or directly to bank account",
              "Create endless memories",
              "View tracker progress over thirty days",
            ]}
            imageSrc="/images/how-it-works/invite-image.png"
            imageAlt="Invite Friends App Screen"
            imagePosition="right"
            buttonText="Start a plan"
            bgColor="bg-[#0B214B]"
          />

          <StepSection
            stepNumber="3"
            title="Vendors Deliver the Celebration"
            description="Once funded goal reached, we navigate logistics directly to a pre-vetted Vendor, Your surprise gets an elegant delivery experience right in your city"
            bullets={[
              "Track order to delivery",
              "Deliver handshakes in every part of town",
              "Your satisfaction is our priority",
            ]}
            imageSrc="/images/how-it-works/vendors-deliver-image.png"
            imageAlt="Vendors Deliver App Screen"
            imagePosition="left"
            buttonText="Find a Vendor nearby"
            bgColor="bg-[#1CC0E0]"
          />
        </div>
        
        <HowItWorksFeatures />
        
        <div className="py-8 bg-gray-50/50">
          <DownloadBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
