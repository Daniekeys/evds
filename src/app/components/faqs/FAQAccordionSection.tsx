"use client";

import { useState } from "react";
import { ChevronDown, Calendar, Heart, Gift } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQGroup {
  icon: React.ReactNode;
  title: string;
  items: FAQItem[];
}

export default function FAQAccordionSection() {
  const [openIndex, setOpenIndex] = useState<string | null>("Planners-0");

  const toggleAccordion = (groupId: string, index: number) => {
    const id = `${groupId}-${index}`;
    if (openIndex === id) {
      setOpenIndex(null);
    } else {
      setOpenIndex(id);
    }
  };

  const faqData: FAQGroup[] = [
    {
      icon: <Calendar className="w-6 h-6 text-yellow-600" />,
      title: "Planners",
      items: [
        {
          question: "How can I download Everyday Surprises mobile app?",
          answer: "Download the Everyday Surprises app for free from:\n\n• Google Play Store – for Android devices\n• Apple App Store – for iPhones and iPads\n\nOr click 'Get the App' on 'Everyday Surprises' landing page. Once downloaded you can sign up as a Planner or Vendor and start your journey!"
        },
        {
          question: "How do I create birthday events?",
          answer: "Once registered as a planner, navigate to your dashboard and click on 'Create Plan'. Follow the prompts to set your date, goal, and celebrant details."
        },
        {
          question: "Which cities are supported?",
          answer: "We currently support major cities across Nigeria, with vendors primarily concentrated in Lagos, Abuja, and Port Harcourt."
        },
        {
          question: "How do I invite planners to contribute?",
          answer: "After creating your plan, you will receive a unique shareable link. Send this link via WhatsApp, SMS, or social media to your friends and family."
        }
      ]
    },
    {
      icon: <Heart className="w-6 h-6 text-yellow-600" />,
      title: "Contributors",
      items: [
        {
          question: "Do contributors need an account?",
          answer: "No, contributors do not need to create an account. They can simply click the planner's shared link and securely checkout as a guest."
        },
        {
          question: "How secure are payments?",
          answer: "All payments are processed through bank-level secure gateways (e.g., Paystack/Flutterwave). We do not store your raw card details."
        },
        {
          question: "Can contributors leave a message?",
          answer: "Yes, during checkout, you can attach a personalized birthday message which will be delivered to the celebrant."
        },
        {
          question: "What happens if the target is not reached?",
          answer: "The planner receives whatever funds are contributed by the deadline and can still proceed to book vendors within that budget."
        }
      ]
    },
    {
      icon: <Gift className="w-6 h-6 text-yellow-600" />,
      title: "Vendors",
      items: [
        {
          question: "How do vendors register?",
          answer: "Click the 'For Vendors' tab and select 'Become a vendor'. Fill out the initial registration form to start the verification process."
        },
        {
          question: "What are the requirements for Vendor's registrations?",
          answer: "You will need a registered business name, government-issued ID, a portfolio of past work, and guarantors for safety verification."
        },
        {
          question: "How do Vendors get paid?",
          answer: "Vendors receive payouts directly to their registered bank accounts immediately after a successful service delivery is confirmed."
        }
      ]
    }
  ];

  return (
    <section className="bg-gray-50/50 py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {faqData.map((group, groupIdx) => (
          <div key={groupIdx} className="flex flex-col gap-6">
            
            {/* Group Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center shrink-0">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{group.title}</h3>
            </div>

            {/* Accordion Items */}
            <div className="flex flex-col gap-3">
              {group.items.map((item, itemIdx) => {
                const id = `${group.title}-${itemIdx}`;
                const isOpen = openIndex === id;

                return (
                  <div 
                    key={itemIdx} 
                    className={`bg-white border transition-colors duration-200 rounded-2xl overflow-hidden ${
                      isOpen ? "border-gray-200 shadow-sm" : "border-gray-100"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(group.title, itemIdx)}
                      className="w-full flex items-center justify-between p-5 md:px-6 md:py-5 text-left bg-white hover:bg-gray-50/50 transition-colors"
                    >
                      <span className="text-sm md:text-base font-semibold text-gray-900 pr-8">
                        {item.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </div>
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-5 md:px-6 pb-6 pt-0 text-gray-600 text-sm md:text-[15px] leading-relaxed whitespace-pre-line border-t border-gray-50">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        ))}
        
      </div>
    </section>
  );
}
