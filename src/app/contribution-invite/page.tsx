"use client";

import Image from "next/image";
import Link from "next/link";
import { LogOut, Calendar, Clock, MapPin,  Shield, Clock4 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContributionInvitePage() {
  const router = useRouter();
  const [amount, setAmount] = useState("5,000");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const quickAmounts = ["5,000", "7,000", "10,000", "15,000"];

  const handleContribute = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/contribution-invite/success");
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-poppins pb-20">
      {/* Header */}
      <header className="w-full bg-white py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
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
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-[#E8F7FA] text-primary hover:bg-[#D4EBEF] px-5 py-2 rounded-full font-semibold text-sm transition-colors"
        >
          <LogOut size={16} className="rotate-180" /> Exit
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 mt-6 md:mt-10">
        {/* Banner */}
        <div className="w-full bg-[#FECC4F] rounded-2xl p-6 md:p-10 relative overflow-hidden shadow-sm">
          {/* Decorative red shapes - simple CSS shapes to mimic design */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-red rounded-[100px] rotate-45 transform opacity-90 hidden md:block"></div>
          <div className="absolute right-32 -bottom-20 w-48 h-48 bg-secondary-red rounded-[80px] -rotate-12 transform opacity-90 hidden md:block"></div>
          
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Welcome to Everyday Surprises
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-secondary-red mb-6">
              Contributors Portal
            </h2>
            <p className="text-primary/80 font-medium text-sm md:text-base">
              Find the Celebrant's details and how to contribute below:
            </p>
          </div>
        </div>

        {/* Celebrant Profile Section */}
        <div className="flex flex-col items-center mt-12 mb-10 text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 bg-gray-200">
            {/* Using arbitrary image placeholder since we don't have the exact avatar */}
            <Image
              src="/images/cake-cutting.jpg" // Placeholder fallback
              alt="Celebrant"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-2">Joe's 30th Birthday Surprise</h2>
          <p className="text-gray-500 text-sm mb-6">Help us make Joe's birthday surprise a reality !</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-gray-500">
            <div className="flex items-center gap-1.5">
              <Calendar size={16} /> 15 Mar, 2026
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            <div className="flex items-center gap-1.5">
              <Clock size={16} /> 09:00AM
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center gap-1.5 bg-[#E8F7FA] text-secondary-blue px-3 py-1.5 rounded-full">
              <Clock4 size={14} /> 12 days to go
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-500 mt-4">
            <MapPin size={16} /> Lagos, Nigeria
          </div>
        </div>

        {/* Main Forms Container */}
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Progress & Contribution Form Card */}
          <div className="bg-white rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden">
            
            {/* Progress Section */}
            <div className="p-6 md:p-8 border-b border-gray-100">
              <div className="flex justify-between items-end mb-3">
                <div className="font-bold text-lg">
                  <span className="text-primary">₦150k</span> <span className="text-gray-400">/ ₦200k</span>
                </div>
                <div className="text-secondary-yellow font-bold text-sm">75%</div>
              </div>
              
              <div className="w-full h-2 bg-yellow-100 rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-secondary-yellow rounded-full" style={{ width: '75%' }}></div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-white z-20 flex items-center justify-center text-xs">👨</div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white z-10 flex items-center justify-center text-xs">👩</div>
                  <div className="w-8 h-8 rounded-full bg-yellow-100 border-2 border-white z-0 flex items-center justify-center text-xs">👱</div>
                </div>
                <p className="text-xs text-secondary-blue font-medium">
                  13 people have already contributed
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-6 md:p-8">
              <form onSubmit={handleContribute} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-primary block">Name</label>
                    <input type="text" placeholder="Enter name" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-secondary-blue focus:ring-1 focus:ring-secondary-blue transition-all bg-[#FAFBFD] placeholder:text-gray-400 text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-primary block">Email</label>
                    <input type="email" placeholder="Enter email address" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-secondary-blue focus:ring-1 focus:ring-secondary-blue transition-all bg-[#FAFBFD] placeholder:text-gray-400 text-sm" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-primary block">Amount</label>
                  <div className="flex w-full">
                    <div className="flex items-center justify-center border border-gray-200 border-r-0 rounded-l-xl px-4 bg-white text-primary font-bold">
                      ₦
                    </div>
                    <input 
                      type="text" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full px-4 py-3 rounded-r-xl border border-gray-200 outline-none focus:border-secondary-blue focus:ring-1 focus:ring-secondary-blue transition-all bg-[#FAFBFD] text-sm font-medium" 
                    />
                  </div>
                  
                  {/* Quick Selectors */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {quickAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setAmount(amt)}
                        className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors ${
                          amount === amt 
                            ? 'bg-primary text-white' 
                            : 'bg-[#F1F5F9] text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        ₦{amt}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-center gap-3 cursor-pointer mt-4">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isAnonymous ? 'bg-secondary-red border-secondary-red' : 'border-gray-300'}`}>
                    {isAnonymous && <CheckIcon />}
                  </div>
                  <input 
                    type="checkbox" 
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="hidden"
                  />
                  <span className="text-sm font-medium text-secondary-blue">Make this contribution anonymous</span>
                </label>

                <div className="space-y-1.5 pt-2">
                  <label className="text-sm text-primary block font-medium">
                    Birthday message <span className="text-gray-400">(Optional)</span>
                  </label>
                  <textarea 
                    placeholder="Write special birthday wishes..." 
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-secondary-blue focus:ring-1 focus:ring-secondary-blue transition-all bg-[#FAFBFD] placeholder:text-gray-400 text-sm resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-secondary-red hover:bg-red-600 text-white font-semibold py-3.5 rounded-full transition-colors shadow-sm">
                    Contribute
                  </button>
                  <div className="flex items-center justify-center gap-1.5 mt-4 text-xs font-bold text-gray-400">
                    <Shield size={14} /> SECURE PAYMENT
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Recent Contributions Card */}
          <div className="bg-[#FAFBFD] rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 overflow-hidden p-6 md:p-8">
            <h3 className="font-bold text-primary text-lg mb-6">Recent contributions</h3>
            
            <div className="space-y-6">
              <ContributionItem 
                name="Daniel Ayeni" 
                amount="₦5,000" 
                message="Happy birthday to Joe" 
                time="Just now" 
                icon="bg-red-100 text-secondary-red" 
              />
              <div className="h-px bg-gray-100 w-full"></div>
              <ContributionItem 
                name="Jerry Loperadi" 
                amount="₦5,000" 
                message="Happy birthday to Joe" 
                time="Jan 2" 
                icon="bg-light-blue-100 text-secondary-blue" 
              />
              <div className="h-px bg-gray-100 w-full"></div>
              <ContributionItem 
                name="Anonymous" 
                amount="₦5,000" 
                message="" 
                time="Dec, 2025" 
                icon="bg-yellow-100 text-secondary-yellow" 
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ContributionItem({ name, amount, message, time, icon }: { name: string, amount: string, message?: string, time: string, icon: string }) {
  return (
    <div className="flex gap-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${icon}`}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <p className="text-sm text-primary">
            <span className="font-bold">{name}</span> contributed <span className="font-bold text-secondary-yellow">{amount}</span>
          </p>
          <span className="text-[10px] text-gray-400 font-medium shrink-0 pt-0.5">{time}</span>
        </div>
        {message && <p className="text-xs text-gray-500 mt-1">{message}</p>}
      </div>
    </div>
  );
}
