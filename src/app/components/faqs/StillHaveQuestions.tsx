import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

export default function StillHaveQuestions() {
  return (
    <section className="w-full bg-gray-50/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0B214B] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          
          {/* Decorative shapes behind icon */}
           <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-400 translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 hidden md:block"></div>
           <div className="absolute right-10 bottom-0 w-40 h-40 bg-red-500 translate-x-1/2 translate-y-1/2 rounded-full opacity-20 hidden md:block"></div>

          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 z-10 w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Still Have Questions?
            </h2>
            <p className="text-blue-100 text-base md:text-lg max-w-sm mb-4">
              Can't find the answers you're looking for?
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-sm"
            >
              Contact support
            </Link>
          </div>
          
          {/* Right Icon */}
          <div className="z-10 w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative text-yellow-500 hover:scale-105 transition-transform duration-300 drop-shadow-2xl">
              <MessageCircleMore className="w-48 h-48 md:w-64 md:h-64 fill-yellow-500" strokeWidth={1} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
