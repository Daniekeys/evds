import { CalendarDays, HeartHandshake, Gift } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <CalendarDays className="w-10 h-10 text-yellow-500" />,
      title: "Plan",
      description: "Plan the birthday party for your family member, friend, or coworker.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-yellow-500" />,
      title: "Contribute",
      description: "Invite others to contribute towards the total sum.",
    },
    {
      icon: <Gift className="w-10 h-10 text-yellow-500" />,
      title: "Deliver",
      description: "Vendors execute the surprise exactly how you want it.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 pt-10 md:pt-0 md:px-8 first:pt-0 first:px-0 hover-lift">
              <div className="w-16 h-16 shrink-0 rounded-xl bg-yellow-50 flex items-center justify-center shadow-sm">
                {step.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
