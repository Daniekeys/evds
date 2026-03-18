"use client";

import { useState } from "react";
import { Eye, EyeOff, Check, X, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    password: "",
  });

  // Password validation checks
  const hasLowercase = /[a-z]/.test(formData.password);
  const hasUppercase = /[A-Z]/.test(formData.password);
  const hasNumber = /[0-9]/.test(formData.password);
  const hasLength = formData.password.length >= 8;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasLowercase && hasUppercase && hasNumber && hasLength) {
      router.push(`/vendor/verify?email=${encodeURIComponent(formData.email)}`);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto fade-in">
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="text-primary hover:text-secondary-red transition-colors">
          <ChevronLeft size={24} />
        </Link>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="text-secondary-blue">Step 1 of 2</span>
          <div className="flex gap-1">
            <div className="h-1 w-16 bg-secondary-yellow rounded-full"></div>
            <div className="h-1 w-2 bg-yellow-200 rounded-full"></div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-2">
        Register as a <span className="text-secondary-red">Vendor</span>
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Start your journey as an Everyday Surprises vendor today.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-primary block">
            Business name
          </label>
          <input
            type="text"
            required
            placeholder="Enter business name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-secondary-blue focus:ring-1 focus:ring-secondary-blue transition-all bg-transparent placeholder:text-gray-400"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-primary block">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="Enter email address"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-secondary-blue focus:ring-1 focus:ring-secondary-blue transition-all bg-transparent placeholder:text-gray-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-primary block">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-secondary-blue focus:ring-1 focus:ring-secondary-blue transition-all bg-transparent placeholder:text-gray-400"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
        </div>

        {/* Password requirements */}
        <div className="flex flex-wrap gap-2 pt-2 pb-4">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${hasLowercase ? 'bg-light-blue-50 text-secondary-blue' : 'bg-red-50 text-secondary-red'}`}>
            {hasLowercase ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
            1 lowercase letter
          </div>
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${hasUppercase ? 'bg-light-blue-50 text-secondary-blue' : 'bg-red-50 text-secondary-red'}`}>
            {hasUppercase ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
            1 uppercase letter
          </div>
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${hasNumber ? 'bg-light-blue-50 text-secondary-blue' : 'bg-red-50 text-secondary-red'}`}>
            {hasNumber ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
            1 number
          </div>
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${hasLength ? 'bg-light-blue-50 text-secondary-blue' : 'bg-red-50 text-secondary-red'}`}>
            {hasLength ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
            8 characters
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-secondary-red hover:bg-red-600 text-white font-semibold py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          Continue to step 2 <span className="text-lg leading-none">→</span>
        </button>
      </form>

      <div className="mt-8 flex items-center gap-4 text-sm text-gray-400 before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200">
        Or continue with
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <button type="button" className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-full hover:bg-gray-50 transition-colors text-sm font-semibold">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google Signup
        </button>
        <button type="button" className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-full hover:bg-gray-50 transition-colors text-sm font-semibold">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.78 2.02-.04 3.38.98 4.16 2.45-3.53 2.15-2.89 6.81.9 8.24-.76 1.84-1.68 3.35-3.72 5.26zm-3.41-14.73c.65-1.43.71-3.11-.41-4.32-1.35.09-2.8.84-3.59 2.07-.63 1.01-.84 2.22-.64 3.28 1.54.12 2.87-.78 3.55-2.01z" />
          </svg>
          Apple Signup
        </button>
      </div>

      <div className="mt-12 text-center text-sm font-medium">
        Already have an account?{" "}
        <a href="#" className="text-secondary-red hover:underline">
          Sign in on mobile app
        </a>
      </div>
    </div>
  );
}
