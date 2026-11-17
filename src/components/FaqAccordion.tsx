"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FaqAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I still drive my car after taking the loan?",
      a: "Yes, 100% absolutely! You retain physical possession, custody, and full driving rights to your vehicle. Ambika Fintech only places an online hypothecation lien on the vehicle's Registration Certificate (RC) with the RTO. Your car remains in your garage for your daily commute and family trips.",
    },
    {
      q: "What if my car already has an ongoing active loan?",
      a: "You are still fully eligible! We offer a Car Loan Refinance + Top-Up facility. Our lending partners will clear your existing loan balance with your previous financier (often at a lower interest rate) and give you the remaining equity as fresh cash credited to your bank account.",
    },
    {
      q: "How much maximum loan amount can I receive?",
      a: "Depending on your car make, model, age, and your monthly income, you can receive up to 200% of your car's current market valuation, with funding amounts scaling from ₹1 Lakh up to ₹50 Lakhs.",
    },
    {
      q: "Is a high CIBIL score mandatory? What if my score is 620-680?",
      a: "Because a Loan Against Car is an asset-backed secured product, our partner lenders are significantly more flexible than unsecured personal loan providers. Applicants with average CIBIL scores (650+) or limited credit history can routinely secure approvals.",
    },
    {
      q: "Which cars and vehicles are eligible for this loan?",
      a: "All private registered (white plate) and select commercial (yellow plate) four-wheelers manufactured within the last 10-12 years are eligible. This covers hatchbacks, sedans, SUVs, and luxury vehicles from Maruti Suzuki, Hyundai, Tata, Mahindra, Toyota, Kia, Honda, and more.",
    },
    {
      q: "How fast will the funds be disbursed to my bank account?",
      a: "With our paperless digital flow, provisional sanction happens in 30 minutes. Once the quick RC verification and digital agreement are signed, funds are disbursed directly into your bank account within 24 business hours.",
    },
    {
      q: "Can I prepay or close my loan early? Are there penalties?",
      a: "Yes, you can prepay or foreclose your loan anytime. In accordance with RBI guidelines, most of our lending partners offer zero foreclosure penalties after the initial 6 monthly installments are serviced.",
    },
  ];

  return (
    <section id="faqs" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#f25c05] bg-orange-100 border border-orange-200 px-3 py-1 rounded-full mb-3">
            Clarity &amp; Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Everything you need to know about taking a loan against your car in India.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors hover:border-orange-300 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 text-slate-900 font-bold text-sm sm:text-base"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#f25c05]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
