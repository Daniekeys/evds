import { ShieldCheck, Store, Handshake } from "lucide-react";

export default function VendorsFeatures() {
  const features = [
    {
      icon: <Store className="w-5 h-5 text-yellow-600" />,
      title: "Expand Networks",
      description: "Tap into our ready user base",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-yellow-600" />,
      title: "Build Credibility",
      description: "Get ratings and reviews",
    },
    {
      icon: <Handshake className="w-5 h-5 text-yellow-600" />,
      title: "Smart Matching",
      description: "Get exactly the requests you need",
    },
  ];

  return (
    <section className="bg-gray-50/50 py-12 border-b border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-row items-center gap-4 px-4 py-4 md:py-0 justify-center md:justify-start">
            <div className="w-12 h-12 bg-yellow-100/60 rounded-xl flex items-center justify-center shrink-0">
              {feature.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
