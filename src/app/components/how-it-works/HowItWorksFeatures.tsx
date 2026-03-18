import { Calendar, Heart, LayoutGrid } from "lucide-react";

export default function HowItWorksFeatures() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-yellow-600" />,
      title: "Plan it",
      description: "Easily create an everyday plan fast and invite via WhatsApp links.",
    },
    {
      icon: <Heart className="w-6 h-6 text-yellow-600" />,
      title: "Contribute",
      description: "Friends and family can contribute funds directly and instantly right in.",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-yellow-600" />,
      title: "Vendors",
      description: "We work with trusted vendors to bring about these quality and service assurance.",
    },
  ];

  return (
    <section className="bg-white py-16 w-full mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center md:items-start gap-4">
            <div className="w-14 h-14 bg-yellow-100/50 rounded-2xl flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed max-w-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
