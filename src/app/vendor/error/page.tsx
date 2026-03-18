"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center fade-in py-12">
      {/* Decorative Error Icon */}
      <div className="relative mb-8">
        <div className="w-28 h-28 rounded-full bg-red-50 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-secondary-red shadow-lg flex items-center justify-center">
            <span className="text-white text-5xl font-bold mb-1">!</span>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-primary mb-3">
        Incorrect OTP
      </h1>
      
      <p className="text-gray-600 text-sm mb-10 leading-relaxed max-w-[280px]">
        Your email cannot be verified because the OTP you entered is incorrect.
      </p>

      <div className="w-full space-y-4">
        <button
          onClick={() => router.back()}
          className="w-full block bg-secondary-red hover:bg-red-600 text-white font-semibold py-3.5 rounded-full transition-colors shadow-sm"
        >
          Try again
        </button>
        
        <Link
          href="/contact"
          className="w-full block bg-[#E8F7FA] hover:bg-[#D4EBEF] text-primary font-semibold py-3.5 rounded-full transition-colors"
        >
          Get support
        </Link>
      </div>
    </div>
  );
}
