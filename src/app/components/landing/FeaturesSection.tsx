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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`rounded-3xl overflow-hidden relative min-h-[300px] sm:min-h-[500px] flex group transition-transform flex-col hover:-translate-y-2 min-w-fit `}
            >
              
              
                 <div className="relative w-full h-[120%] ">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain object-bottom md:object-right-bottom group-hover:scale-105 transition-transform duration-500"
                    />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
