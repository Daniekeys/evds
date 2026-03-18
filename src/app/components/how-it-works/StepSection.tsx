import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface StepSectionProps {
  stepNumber: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  buttonText: string;
  bgColor: string;
}

export default function StepSection({
  stepNumber,
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  imagePosition,
  buttonText,
  bgColor,
}: StepSectionProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className={`w-full py-16 ${isImageLeft ? "bg-white" : "bg-gray-50/50"}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* Image Content */}
        <div className={`md:w-1/2 w-full flex justify-center ${!isImageLeft ? "md:order-2" : "md:order-1"}`}>
          <div className={`relative w-full max-w-[420px] aspect-square rounded-[3rem] ${bgColor} flex items-center justify-center p-8 overflow-hidden`}>
             {/* If we need custom shapes we can add them as background elements here, 
                 but for a matching recreation, the base color + rounded square works.  */}
             <div className="relative w-full h-[120%] -mb-10 drop-shadow-2xl">
               <Image 
                 src={imageSrc}
                 alt={imageAlt}
                 fill
                 className="object-contain object-bottom"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
             </div>
          </div>
        </div>

        {/* Text Content */}
        <div className={`md:w-1/2 flex flex-col items-start gap-6 ${!isImageLeft ? "md:order-1" : "md:order-2"}`}>
          {/* Step Number Circle */}
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold text-gray-900 shadow-sm">
            {stepNumber}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            {description}
          </p>
          
          <ul className="flex flex-col gap-4 mt-2 mb-4">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium text-base">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 fill-cyan-50 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-sm">
            {buttonText}
          </button>
        </div>

      </div>
    </section>
  );
}
