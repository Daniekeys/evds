import Image from "next/image";
import { Star, ShieldCheck } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Blessing's surprise was sorted out without hassle. Verified vendors are really the deal!",
      author: "Anita Johnson",
      avatar: "https://i.pravatar.cc/150?u=1", // Used placeholder for people avatars as they weren't explicitly provided, can change to proper stock images if needed
      amount: "225,000",
    },
    {
      text: "My son's 10th birthday was absolutely amazing with vendors getting the job done securely.",
      author: "Sani Ojo",
      avatar: "https://i.pravatar.cc/150?u=2",
      amount: "445,000",
    },
    {
      text: "The easiest way to throw an office party for a coworker it was totally organized and perfect.",
      author: "Zainab Ahmed",
      avatar: "https://i.pravatar.cc/150?u=3",
      amount: "140,000",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 bg-gray-50/50" id="testimonials">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-700 text-sm font-semibold mb-4">
          ✨ Recent Celebrations
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent Celebrations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto pb-8 snap-x">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm min-w-[300px] snap-center flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium mb-8">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
            
            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 relative">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.author}</h4>
                  <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                    <ShieldCheck size={14} />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
              <div className="font-bold text-yellow-500 text-lg">
                ₦ {testimonial.amount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
