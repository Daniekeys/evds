import Image from "next/image";
import { Users } from "lucide-react";

export default function PopularSurprisesSection() {
  const packages = [
    {
      title: "Cake & Chocolate Surprise",
      price: "15,000",
      contributors: "5",
      image: "/images/home-page/cake-image.png"
    },
    {
      title: "Premium Cake & Drinks package",
      price: "65,000",
      contributors: "9",
      image: "/images/cupcakes-ballons.jpg" // Using an alternative image from public/images
    },
    {
      title: "Cake, Wine & Chops",
      price: "40,000",
      contributors: "6",
      image: "/images/cake-cutting.jpg" // Using an alternative image
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="surprises">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-700 text-sm font-semibold mb-4">
          ✨ Popular packages
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What You Can Plan</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover-lift transition-all">
            <div className="relative h-64 w-full">
              <Image 
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-green-600 flex items-center gap-1 shadow-sm">
                ✓ Funded by {pkg.contributors}
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{pkg.title}</h3>
              <div className="flex items-end justify-between">
                <div className="text-yellow-500 font-bold text-xl">₦ {pkg.price}</div>
                <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
                  <Users size={14} className="text-gray-400" />
                  <span>{pkg.contributors} Contributing</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-full transition-colors shadow-md hover:shadow-lg hover:-translate-y-1 transform">
          See all packages
        </button>
      </div>
    </section>
  );
}
