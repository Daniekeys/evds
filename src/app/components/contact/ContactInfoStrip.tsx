import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfoStrip() {
  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-yellow-600" />,
      title: "Email",
      value: "support@everydaysurprises.ng",
    },
    {
      icon: <Phone className="w-5 h-5 text-yellow-600" />,
      title: "Phone number",
      value: "+234 813 313 0185",
    },
    {
      icon: <MapPin className="w-5 h-5 text-yellow-600" />,
      title: "Address",
      value: "12, Tiyami Road, Lekki, Lagos",
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {contactDetails.map((detail, idx) => (
          <div key={idx} className="flex flex-row items-center gap-5 px-4 py-4 md:py-0 justify-start">
            <div className="w-12 h-12 bg-yellow-100/60 rounded-xl flex items-center justify-center shrink-0">
              {detail.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm font-bold text-gray-900 mb-0.5">
                {detail.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                {detail.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
