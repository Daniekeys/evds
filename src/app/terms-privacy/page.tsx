import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

export const metadata = {
  title: "Terms and Privacy | Everyday Surprises",
  description: "Read about our terms of service and privacy policy on Everyday Surprises.",
};

export default function TermsPrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        
        {/* Simple Hero Section */}
        <section className="bg-[#0B214B] py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
              Terms and <span className="text-red-500">Privacy</span>
            </h1>
            <p className="text-gray-300 text-lg">
              We are committed to protecting your data and ensuring a safe environment for you.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Last updated: October 24, 2023
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-gray-800">
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">1. Terms of Service</h2>
            
            <div className="space-y-6">
              <p className="text-sm leading-relaxed">
                By accessing or using our Platform, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Platform.
              </p>

              <div>
                <h4 className="font-bold text-[15px] mb-2 text-gray-800">User Accounts</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  To access certain features of the platform, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide and complete information during registration.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[15px] mb-2 text-gray-800">Planner Responsibilities</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  To access certain features of the platform, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide and complete information during registration.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[15px] mb-2 text-gray-800">Contributor Terms</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  To access certain features of the platform, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide and complete information during registration.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[15px] mb-2 text-gray-800">Vendor Terms</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  To access certain features of the platform, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide and complete information during registration.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[15px] mb-2 text-gray-800">Payment and Fees</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  To access certain features of the platform, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide and complete information during registration.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">2. Privacy Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[15px] mb-2 text-gray-800">Data Collection</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  To access certain features of the platform, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide and complete information during registration.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[15px] mb-2 text-gray-800">How We Use Your Data</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  To access certain features of the platform, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide and complete information during registration.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[15px] mb-2 text-gray-800">Security Measures</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  To access certain features of the platform, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide and complete information during registration.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[15px] mb-2 text-gray-800">Your Rights</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  To access certain features of the platform, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide and complete information during registration.
                </p>
              </div>
            </div>
          </div>

        </section>

      </main>
      <Footer />
    </div>
  );
}
