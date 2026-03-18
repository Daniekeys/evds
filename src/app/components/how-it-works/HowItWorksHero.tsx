import Image from "next/image";
import Link from "next/link";

export default function HowItWorksHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col md:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col items-start gap-6 z-10">
        <div className="flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-100">
          <span>✨ How it works Guide</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          How Everyday Surprises <br className="hidden md:block"/>
          <span className="text-red-500">Works 🎉</span>
        </h1>
        
        <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
          Plan a birthday invite friends and family to contribute to the ultimate celebration with Everyday Surprise.
        </p>
        
        <div className="flex items-center gap-4 mt-4">
          <Link href="/how-it-works" className="hover-lift transition-transform hover:-translate-y-1">
            <Image 
              src="/images/home-page/google.png" 
              alt="Get it on Google Play" 
              width={140} 
              height={42} 
            />
          </Link>
          <Link href="/how-it-works" className="hover-lift transition-transform hover:-translate-y-1">
            <Image 
              src="/images/home-page/apple.png" 
              alt="Download on the App Store" 
              width={140} 
              height={42} 
            />
          </Link>
        </div>
      </div>
      
      {/* Right Image */}
      <div className="md:w-1/2 relative w-full aspect-square md:aspect-auto md:h-[500px] flex justify-center items-center">
        {/* We assume hero-image.png has the colored background shapes built-in based on typical asset delivery */}
        <div className="relative w-full max-w-md h-full min-h-[400px]">
           <Image
             src="/images/how-it-works/hero-image.png"
             alt="Happy person looking at phone"
             fill
             className="object-contain"
             sizes="(max-width: 768px) 100vw, 50vw"
             priority
           />
        </div>
      </div>
    </section>
  );
}
