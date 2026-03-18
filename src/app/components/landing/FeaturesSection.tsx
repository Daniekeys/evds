import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      title: "Easy Planning",
      image: "/images/home-page/features-1.png",
      bgClass: "bg-yellow-500",
    },
    {
      title: "Group Contribution",
      image: "/images/home-page/features-2.png",
      bgClass: "bg-blue-400",
    },
    {
      title: "Verified Vendors",
      image: "/images/home-page/features-3.png",
      bgClass: "bg-blue-600",
    },
    {
      title: "Secure Delivery",
      image: "/images/home-page/features-4.png",
      bgClass: "bg-red-500",
    },
  ];

  return (
    <section className="bg-[#072147] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold">
            ✨ Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl">
            Why People Choose Everyday Surprises
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.bgClass} rounded-3xl overflow-hidden relative min-h-[300px] sm:min-h-[400px] flex group transition-transform hover:-translate-y-2`}
            >
              <h3 className="absolute top-8 left-8 text-2xl md:text-3xl font-bold text-white z-10 max-w-[200px]">
                {feature.title}
              </h3>
              <div className="absolute inset-0 w-full h-full p-4 pt-20 flex items-end justify-center md:items-center">
                 <div className="relative w-full h-[120%] -bottom-10 md:h-[130%] md:-bottom-16">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain object-bottom md:object-right-bottom group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
