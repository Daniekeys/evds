import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import DownloadBanner from "../components/landing/DownloadBanner";
import VendorsHero from "../components/vendors/VendorsHero";
import VendorsFeatures from "../components/vendors/VendorsFeatures";
import VendorsCategories from "../components/vendors/VendorsCategories";
import VendorsSteps from "../components/vendors/VendorsSteps";
import VendorsTestimonials from "../components/vendors/VendorsTestimonials";

export const metadata = {
  title: "For Vendors | Everyday Surprises",
  description: "Grow your business with Nigeria's premier birthday celebration platform.",
};

export default function VendorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        <VendorsHero />
        <VendorsFeatures />
        <VendorsCategories />
        <VendorsSteps />
        <VendorsTestimonials />
        
        <div className="py-8 bg-gray-50/50">
          <DownloadBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
