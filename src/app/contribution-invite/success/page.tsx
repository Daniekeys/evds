"use client";

import Image from "next/image";
import Link from "next/link";
import { LogOut, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContributionSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-poppins flex flex-col">
      {/* Header */}
      <header className="w-full bg-white py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-100 z-50">
        <Link href="/">
          <Image
            src="/images/Logo.png"
            alt="Everyday Surprises Logo"
            width={140}
            height={45}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <button 
          onClick={() => router.push("/")}
          className="flex items-center gap-2 bg-[#E8F7FA] text-primary hover:bg-[#D4EBEF] px-5 py-2 rounded-full font-semibold text-sm transition-colors"
        >
          <LogOut size={16} className="rotate-180" /> Exit
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 md:p-12 fade-in">
        <div className="w-full max-w-lg flex flex-col items-center text-center">
          
          {/* Decorative Success Icon (Reused from Vendor Success) */}
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
            Thank you !
          </h1>
          
          <p className="text-primary font-medium text-sm mb-10 leading-relaxed max-w-[320px]">
            Your contribution to Joes's 30th birthday surprise. Payment receipt has been sent to your email
          </p>

          {/* Receipt Card */}
          <div className="w-full bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8 space-y-6">
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Amount</span>
                <span className="font-bold text-primary text-base">₦5,000</span>
              </div>
              
              <div className="w-full h-px bg-gray-100"></div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Reference ID</span>
                <span className="font-bold text-gray-500">#TRX - 984753</span>
              </div>

              <div className="pt-4 space-y-4">
                <button
                  className="w-full bg-secondary-red hover:bg-red-600 text-white font-semibold py-3.5 rounded-full transition-colors shadow-sm"
                >
                  Download receipt
                </button>
                
                <button
                  onClick={() => router.push("/contribution-invite")}
                  className="w-full bg-[#E8F7FA] hover:bg-[#D4EBEF] text-primary font-semibold py-3.5 rounded-full transition-colors"
                >
                  Contribute again
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
