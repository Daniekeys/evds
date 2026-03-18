import Image from "next/image";
import Link from "next/link";
import { Zap, CircleDashed } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden">
      {/* Left Content */}
      <div className="lg:w-1/2 flex flex-col items-start gap-6 z-10 w-full">
        <div className="flex items-center gap-2 border border-yellow-200 text-yellow-600 px-4 py-1.5 rounded-full text-sm font-semibold">
          <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block mr-1"></span>
          24/7 Support
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Contact Everyday Surprises <br className="hidden md:block"/>
          <span className="text-red-500">Support.</span>
        </h1>
        
        <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
          We're here to help you plan the perfect celebration. Reach out to our dedicated team today.
        </p>
        
        <div className="mt-4">
          <Link 
            href="#form" 
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-sm"
          >
            Contact support
          </Link>
        </div>
      </div>
      
      {/* Right Image Container */}
      <div className="lg:w-1/2 relative w-full flex justify-center mt-10 lg:mt-0">
        <div className="relative w-full max-w-[500px] aspect-square">
          
          {/* Background Solid Color Squircle matching screenshot */}
          <div className="absolute inset-4 sm:inset-8 bg-[#FF1B4B] rounded-[3rem] overflow-hidden">
            <div className="absolute inset-0 top-auto h-[90%] w-full">
               <Image
                 src="/images/contact/contact-hero.png"
                 alt="Customer Support Representative"
                 fill
                 className="object-cover object-top hover:scale-105 transition-transform duration-700"
                 sizes="(max-width: 768px) 100vw, 50vw"
                 priority
               />
            </div>
          </div>

          {/* Floating Pill - Top Right */}
          <div className="absolute -top-2 right-4 md:-right-6 bg-white rounded-full p-3 px-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3 border border-gray-50 z-20">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
               <CircleDashed className="w-4 h-4 text-blue-500 animate-[spin_4s_linear_infinite]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900 leading-none">24/7</span>
              <span className="text-[10px] text-gray-500 font-medium">Professional support</span>
            </div>
          </div>

          {/* Floating Pill - Bottom Left */}
          <div className="absolute bottom-10 -left-4 md:-left-8 bg-white rounded-full p-3 px-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3 border border-gray-50 z-20">
            <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
               <Zap className="w-4 h-4 text-cyan-500 fill-cyan-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 font-medium leading-none mb-1">Instant</span>
              <span className="text-xs font-bold text-gray-900 leading-none">Response time</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
