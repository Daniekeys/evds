"use client";

import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import HowItWorksSection from "./components/landing/HowItWorksSection";
import PopularSurprisesSection from "./components/landing/PopularSurprisesSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import GrowBusinessSection from "./components/landing/GrowBusinessSection";
import DownloadBanner from "./components/landing/DownloadBanner";
import Footer from "./components/landing/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <HowItWorksSection />
        <PopularSurprisesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <GrowBusinessSection />
        <DownloadBanner />
        <Footer />
      </main>
    </div>
  );
}

