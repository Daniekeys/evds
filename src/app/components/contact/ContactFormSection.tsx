"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    accepted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to actual API in real environment
    console.log("Form submitted:", formData);
  };

  return (
    <section id="form" className="w-full bg-[#0B214B] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-square rounded-[3rem] overflow-hidden">
             <Image
               src="/images/contact/contact-form-image.png"
               alt="A man smiling celebrating his birthday with a cake"
               fill
               className="object-cover"
               sizes="(max-width: 1024px) 100vw, 50vw"
             />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 w-full flex flex-col text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Leave us a message
          </h2>
          
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                placeholder="Write message..."
                rows={6}
                className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="accept"
                className="w-5 h-5 rounded border-gray-600 text-red-500 focus:ring-red-500 bg-transparent cursor-pointer"
                checked={formData.accepted}
                onChange={(e) => setFormData({...formData, accepted: e.target.checked})}
                required
              />
              <label htmlFor="accept" className="text-sm text-gray-300 cursor-pointer">
                I accept to be contacted.
              </label>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-3.5 rounded-full transition-colors shadow-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
