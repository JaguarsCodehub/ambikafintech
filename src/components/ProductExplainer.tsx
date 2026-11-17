"use client";

import React, { useState } from "react";
import {
  Car,
  Gauge,
  Landmark,
  CalendarCheck,
  ArrowRight,
  ArrowDown,
  Calculator,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface ProductExplainerProps {
  onOpenModal: () => void;
}

export const ProductExplainer: React.FC<ProductExplainerProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<"paid-off" | "ongoing-loan">("paid-off");

  const steps = [
    {
      num: "STEP 1",
      icon: <Car className="w-5 h-5 text-[#f25c05]" />,
      title: "Keep Driving Your Car",
      desc: "No physical confiscation. Your car stays parked in your garage for daily commute, office, and family travel.",
      badge: "Zero Impound",
      theme: "light",
    },
    {
      num: "STEP 2",
      icon: <Gauge className="w-5 h-5 text-[#f25c05]" />,
      title: "Instant Car Valuation",
      desc: "AI-calibrated RTO verification calculates up to 200% LTV of vehicle valuation in 30 seconds with zero friction.",
      badge: "Digital Check",
      theme: "light",
    },
    {
      num: "STEP 3",
      icon: <Landmark className="w-5 h-5 text-white" />,
      title: "Direct Disbursal in 24h",
      desc: "Sanctioned funds transferred straight into your primary bank account via RTGS or IMPS within 24 hours.",
      badge: "Same-Day Cash",
      theme: "dark",
    },
    {
      num: "STEP 4",
      icon: <CalendarCheck className="w-5 h-5 text-[#f25c05]" />,
      title: "Comfortable EMIs",
      desc: "Flexible tenure from 12 to 84 months. Lowest interest starting from 10.99% p.a. Prepay with zero penalty.",
      badge: "10.99% p.a.",
      theme: "light",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Responsive 4-Step Process Cards (Fixes overflow permanently) */}
          <div className="lg:col-span-6">
            <div className="p-4 sm:p-6 bg-slate-50 border border-slate-200 rounded-3xl shadow-lg relative">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <span className="text-xs font-black uppercase tracking-wider text-[#f25c05]">
                  How Ambika Loan Against Car Works
                </span>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  100% Transparent
                </span>
              </div>

              {/* 2x2 Grid of Cards with Zero Text Overflow */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Step 1 */}
                <div className="bg-white border-2 border-orange-200/80 rounded-2xl p-4 shadow-sm flex flex-col justify-between hover:border-[#f25c05] transition-all">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                        {steps[0].icon}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-extrabold text-[#f25c05] uppercase tracking-wider block">
                          {steps[0].num}
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug break-words">
                          {steps[0].title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-2">
                      {steps[0].desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-500">
                    <span>{steps[0].badge}</span>
                    <span className="text-[#f25c05] hidden sm:inline">&rarr;</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white border-2 border-orange-200/80 rounded-2xl p-4 shadow-sm flex flex-col justify-between hover:border-[#f25c05] transition-all">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                        {steps[1].icon}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-extrabold text-[#f25c05] uppercase tracking-wider block">
                          {steps[1].num}
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug break-words">
                          {steps[1].title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-2">
                      {steps[1].desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-500">
                    <span>{steps[1].badge}</span>
                    <span className="text-[#f25c05] hidden sm:inline">&darr;</span>
                  </div>
                </div>

                {/* Step 4 (Placed left in reverse flow or standard 3-4 flow) */}
                <div className="bg-white border-2 border-orange-200/80 rounded-2xl p-4 shadow-sm flex flex-col justify-between hover:border-[#f25c05] transition-all">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                        {steps[3].icon}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-extrabold text-[#f25c05] uppercase tracking-wider block">
                          {steps[3].num}
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug break-words">
                          {steps[3].title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-2">
                      {steps[3].desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-500">
                    <span>{steps[3].badge}</span>
                    <span className="text-[#f25c05]">✓ Complete</span>
                  </div>
                </div>

                {/* Step 3 (Highlighted Dark Card) */}
                <div className="bg-slate-950 border-2 border-slate-800 rounded-2xl p-4 shadow-md flex flex-col justify-between text-white hover:border-[#f25c05] transition-all">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-[#f25c05] flex items-center justify-center flex-shrink-0 font-black text-white text-base">
                        ₹
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider block">
                          {steps[2].num}
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-white leading-snug break-words">
                          {steps[2].title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed mt-2">
                      {steps[2].desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-bold text-amber-400">
                    <span>{steps[2].badge}</span>
                    <span className="text-[#f25c05] hidden sm:inline">&larr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Explanation */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-[#c2410c] border border-orange-200 mb-4">
              Simple • Transparent • Digital
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Unlock Instant Cash Against Your Car <br />
              <span className="text-[#f25c05]">Without Ever Selling It</span>
            </h2>

            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              A <strong>Loan Against Car</strong> (often called Car Par Loan or Car Refinancing) is a secured loan product that empowers you to leverage the latent equity parked in your vehicle. Instead of letting your car sit solely as a depreciating asset, you can borrow up to <strong>200% of its current valuation</strong> for business liquidity, medical urgencies, education, or weddings.
            </p>

            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              The greatest benefit? <strong>You retain 100% custody and full driving rights.</strong> You commute to your office, travel with your family, and run your daily routine with zero interruption while your money works for you.
            </p>

            {/* Tab Switcher */}
            <div className="flex border-b border-slate-200 mt-6 mb-4">
              <button
                type="button"
                onClick={() => setActiveTab("paid-off")}
                className={`pb-3 px-4 text-sm font-bold border-b-2 transition ${
                  activeTab === "paid-off"
                    ? "border-[#f25c05] text-[#f25c05]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Option A: Fully Owned (Paid-Off) Car
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("ongoing-loan")}
                className={`pb-3 px-4 text-sm font-bold border-b-2 transition ${
                  activeTab === "ongoing-loan"
                    ? "border-[#f25c05] text-[#f25c05]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Option B: Car with Active Loan
              </button>
            </div>

            {/* Tab Details */}
            {activeTab === "paid-off" ? (
              <div className="bg-orange-50/80 border-l-4 border-[#f25c05] p-4 rounded-r-xl mb-6">
                <h4 className="text-sm font-bold text-[#c2410c] mb-1">
                  Fresh Equity Loan on Free Car
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  If your car has zero active loans, you get the highest loan amount (up to 200% LTV) with minimal KYC and vehicle RC inspection in just 24 hours.
                </p>
              </div>
            ) : (
              <div className="bg-emerald-50/80 border-l-4 border-emerald-600 p-4 rounded-r-xl mb-6">
                <h4 className="text-sm font-bold text-emerald-800 mb-1">
                  Balance Transfer + Top-Up Loan
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Still paying EMIs on your existing car loan? We will transfer your balance to a lower interest lender AND give you an extra top-up loan of up to ₹15 Lakhs!
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 bg-[#f25c05] hover:bg-[#d94e02] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-md transition"
              >
                <Calculator className="w-4 h-4" />
                Calculate Car Value &amp; EMI
              </a>
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm border border-slate-300 transition"
              >
                <ShieldCheck className="w-4 h-4 text-[#f25c05]" />
                Talk to Loan Specialist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
