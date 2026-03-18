"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center fade-in py-12">
      {/* Decorative Success Icon */}
      <div className="relative mb-8">
        {/* Floating elements */}
        <div className="absolute -top-4 -left-4 w-2 h-2 rounded-full bg-secondary-blue"></div>
        <div className="absolute top-0 -right-2 w-3 h-3 rounded-full bg-secondary-blue opacity-50"></div>
        <div className="absolute -left-8 top-1/2 w-1.5 h-1.5 rounded-full bg-secondary-yellow"></div>
        <div className="absolute -bottom-2 -left-2 text-secondary-yellow text-lg leading-none">✨</div>
        <div className="absolute -top-6 right-4 text-gray-400 text-sm leading-none">×</div>
        <div className="absolute bottom-4 -right-10 text-secondary-red text-sm leading-none">●</div>
        <div className="absolute top-4 -left-8 text-secondary-red text-lg leading-none">✦</div>
        
        {/* Main Icon */}
        <div className="w-24 h-24 rounded-full bg-[#FECC4F] shadow-md flex items-center justify-center relative z-10 border-4 border-yellow-100">
          <Check size={48} className="text-white" strokeWidth={3} />
        </div>
        <div className="absolute -bottom-1 left-2 w-4 h-4 rounded-full bg-primary z-20"></div>
      </div>

      <h1 className="text-3xl font-bold text-primary mb-3">
        Success !
      </h1>
      
      <p className="text-gray-600 text-sm mb-10 leading-relaxed max-w-[280px]">
        Your email is verified. Please sign in to your account on Everyday Surprises mobile app.
      </p>

      <div className="w-full space-y-4">
        <Link
          href="#"
          className="w-full block bg-secondary-red hover:bg-red-600 text-white font-semibold py-3.5 rounded-full transition-colors shadow-sm"
        >
          Sign in on mobile
        </Link>
        
        <Link
          href="/how-it-works"
          className="w-full block bg-[#E8F7FA] hover:bg-[#D4EBEF] text-primary font-semibold py-3.5 rounded-full transition-colors"
        >
          Download app
        </Link>
      </div>
    </div>
  );
}
