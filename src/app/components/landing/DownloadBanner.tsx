import Image from "next/image";
import Link from "next/link";

export default function DownloadBanner() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-6">
      <div className="bg-[#072147] rounded-[3rem] overflow-hidden flex flex-col md:flex-row relative">
        <div className="absolute inset-0 bg-yellow-500/10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }} />
        
        {/* Left Side (Content) */}
        <div className="md:w-[60%] p-12 md:p-20 flex flex-col justify-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Download App
          </h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-md">
            Download the everyday surprises app today to start planning the perfect birthday!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="#" className="hover-lift flex-shrink-0">
              <Image 
                src="/images/home-page/playstore.svg" 
                alt="Get it on Google Play" 
                width={160} 
                height={48} 
              />
            </Link>
            <Link href="#" className="hover-lift flex-shrink-0">
              <Image 
                src="/images/home-page/apple-store.svg" 
                alt="Download on the App Store" 
                width={160} 
                height={48} 
              />
            </Link>
            
            <div className="hidden md:block ml-4 p-2 bg-white rounded-xl">
              <Image 
                src="/images/home-page/QR Code.svg"
                alt="Scan to download"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>

        {/* Right Side (Image Placeholder) */}
        <div className="md:w-[40%] bg-yellow-500 relative min-h-[300px] md:min-h-full clip-diagonal">
          {/* Note: Specific phone hand image not found but replicating the yellow shape from design */}
           <div className="absolute inset-0 w-full h-full flex items-center justify-center p-8">
             <div className="relative w-full h-full max-w-[250px] rotate-12 drop-shadow-2xl">
                <Image
                  src="/images/home-page/hero.png" // Reused hero image as placeholder for the app
                  alt="App Preview"
                  fill
                  className="object-contain"
                />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
