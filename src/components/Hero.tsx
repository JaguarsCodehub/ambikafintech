"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Car, 
  Home, 
  GraduationCap, 
  FileText,
  BadgePercent,
  Sparkles
} from "lucide-react";

interface HeroProps {
  onCheckEligibility?: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [activeTab, setActiveTab] = useState<"car" | "personal" | "home" | "rc">("car");

  const servicesData = {
    car: {
      title: "Car Loan & Top-Up",
      highlight: "Up to 200% LTV",
      desc: "Unlock emergency capital against your car with zero impoundment. Keep driving your vehicle freely while securing lowest interest rates starting at 10.99%.",
      badge: "Disbursal in 24 Hrs",
      points: ["Car stays with you 100%", "Prepayment with 0 penalty", "Minimal paperwork"]
    },
    personal: {
      title: "Personal & Education Loan",
      highlight: "Up to ₹25 Lakhs",
      desc: "Fast sanctions for higher education, career growth, or medical needs with transparent terms and flexible tenures from 12 to 60 months.",
      badge: "CIBIL 650+ Accepted",
      points: ["No collateral needed", "Fast digital verification", "Direct bank transfer"]
    },
    home: {
      title: "Home Loan & Transfer",
      highlight: "Save ₹5-15L Interest",
      desc: "Lowest home loan interest rates and seamless balance transfer to cut down your existing high-cost EMIs significantly.",
      badge: "Starting 8.50% p.a.",
      points: ["Doorstep assistance", "Subsidies & tax benefits", "Zero hidden charges"]
    },
    rc: {
      title: "RTO & RC Transfer",
      highlight: "100% Hassle-Free",
      desc: "Complete ownership transfer, hypothecation clearance, and RTO paperwork handled directly across all Mumbai & MMR RTO offices.",
      badge: "MH-01 to MH-47 Covered",
      points: ["Doorstep document pickup", "Fast government clearances", "No agent runaround"]
    }
  };

  const current = servicesData[activeTab];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-slate-50 py-12 md:py-20 border-b border-slate-200">
      {/* Subtle light ambient glow circles */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-orange-200/30 to-amber-100/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle geometric dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#f25c05 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authentic Brand Story & Interactive Loan Categories */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-orange-100/80 border border-orange-200 text-orange-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#f25c05] animate-ping" />
              <span>MUMBAI &bull; TRUSTED FINANCIAL CHANNEL PARTNER</span>
            </div>

            {/* Typography with Montserrat Font */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12] font-display">
              Your Goals Need Fuel. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f25c05] via-orange-600 to-amber-600">
                Capital Shouldn&apos;t Be the Barrier.
              </span>
            </h1>

            {/* Authentic Brand Story Description with Poppins */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal font-sans">
              Whether unlocking capital against your car without parking it, financing your child&apos;s higher education, consolidating high-cost debts, or transferring your vehicle RC in Mumbai—Ambika Fintech brings transparent, doorstep loan facilitation with India&apos;s premier RBI-registered lenders.
            </p>

            {/* Interactive Service Pill Tabs */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-display">
                Explore What We Power:
              </p>
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveTab("car")}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all font-display ${
                    activeTab === "car"
                      ? "bg-[#f25c05] text-white shadow-md shadow-orange-500/25 border border-orange-500 scale-[1.02]"
                      : "bg-white hover:bg-orange-50/70 text-slate-700 border border-slate-200 shadow-sm"
                  }`}
                >
                  <Car className="w-4 h-4 text-inherit" />
                  Car Loan &amp; Top-Up
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("personal")}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all font-display ${
                    activeTab === "personal"
                      ? "bg-[#f25c05] text-white shadow-md shadow-orange-500/25 border border-orange-500 scale-[1.02]"
                      : "bg-white hover:bg-orange-50/70 text-slate-700 border border-slate-200 shadow-sm"
                  }`}
                >
                  <GraduationCap className="w-4 h-4 text-inherit" />
                  Personal &amp; Education Loan
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("home")}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all font-display ${
                    activeTab === "home"
                      ? "bg-[#f25c05] text-white shadow-md shadow-orange-500/25 border border-orange-500 scale-[1.02]"
                      : "bg-white hover:bg-orange-50/70 text-slate-700 border border-slate-200 shadow-sm"
                  }`}
                >
                  <Home className="w-4 h-4 text-inherit" />
                  Home Loan
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("rc")}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all font-display ${
                    activeTab === "rc"
                      ? "bg-[#f25c05] text-white shadow-md shadow-orange-500/25 border border-orange-500 scale-[1.02]"
                      : "bg-white hover:bg-orange-50/70 text-slate-700 border border-slate-200 shadow-sm"
                  }`}
                >
                  <FileText className="w-4 h-4 text-inherit" />
                  RC Transfer
                </button>
              </div>
            </div>

            {/* Dynamic Active Service Card in Light Theme */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-orange-950/5 max-w-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-slate-900 text-base sm:text-lg font-display">{current.title}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-orange-100 text-[#f25c05] border border-orange-200">
                    {current.highlight}
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  {current.badge}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed font-sans">
                {current.desc}
              </p>
              <div className="grid sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 font-medium">
                {current.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Trust Indicators in Light Theme */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-600 font-medium font-sans">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>RBI-Registered Lenders Only</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Same Day Digital Disbursals</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgePercent className="w-4 h-4 text-[#f25c05]" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Light Orbital Hub with Rotating Car & Graduation Cap */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              
              {/* Outer Orbit Track */}
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-orange-200/80 animate-[spin_40s_linear_infinite]" />
              
              {/* Inner Orbit Track */}
              <div className="absolute inset-12 rounded-full border border-orange-100 bg-gradient-to-tr from-orange-50/50 via-white to-amber-50/40" />

              {/* Central Brand Badge */}
              <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[#f25c05] via-orange-500 to-amber-500 p-1 shadow-xl shadow-orange-500/20">
                <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-1 text-[#f25c05]">
                    <Sparkles className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-slate-900 font-black text-sm tracking-wide font-display">AMBIKA</span>
                  <span className="text-[#f25c05] text-[10px] font-extrabold tracking-widest uppercase font-display">FINTECH</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 font-medium">Sakinaka, Mumbai</span>
                </div>
              </div>

              {/* Rotating Car Node (Top) with SVG */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border-2 border-orange-300 px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-md hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-[#f25c05]">
                  {/* Clean Animated Vector Car SVG */}
                  <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.7 2 11.3 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 font-display">Car Top-Up</div>
                  <div className="text-[10px] font-semibold text-orange-600">200% LTV &bull; Zero Impound</div>
                </div>
              </div>

              {/* Graduation Cap Node (Bottom) indicating Personal & Education Loan */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border-2 border-amber-300 px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-md hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <GraduationCap className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 font-display">Personal &amp; Education</div>
                  <div className="text-[10px] font-semibold text-amber-700">Quick Disbursal &bull; Low EMI</div>
                </div>
              </div>

              {/* Floating Stat Badge Left */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm border border-slate-200 px-3 py-2 rounded-xl text-center shadow-md">
                <div className="text-sm font-black text-slate-900 font-display">₹250+ Cr</div>
                <div className="text-[10px] text-slate-500 font-medium">Facilitated</div>
              </div>

              {/* Floating Stat Badge Right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm border border-slate-200 px-3 py-2 rounded-xl text-center shadow-md">
                <div className="text-sm font-black text-[#f25c05] font-display">50,000+</div>
                <div className="text-[10px] text-slate-500 font-medium">Happy Borrowers</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
