import React from "react";
import {
  TrendingUp,
  Car,
  Zap,
  Percent,
  Clock,
  ShieldCheck,
  CreditCard,
  MapPin,
  Building2,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#f25c05]" />,
      title: "Up to 200% Car Valuation",
      desc: "Highest Loan-to-Value (LTV) ratio in India, unlocking maximum liquidity from your existing car equity.",
    },
    {
      icon: <Car className="w-6 h-6 text-[#f25c05]" />,
      title: "Retain 100% Driving Rights",
      desc: "Zero asset confiscation. Your car stays in your hands for family, work, and highway travel as always.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#f25c05]" />,
      title: "Digital Approval in 30 Mins",
      desc: "Instant AI-powered vehicle valuation algorithms and automated eligibility checks with no manual lag.",
    },
    {
      icon: <Percent className="w-6 h-6 text-[#f25c05]" />,
      title: "Interest from 10.99% p.a.",
      desc: "Enjoy competitive asset-backed rates significantly lower than personal loans or high-interest cash cards.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#f25c05]" />,
      title: "Flexible 12 to 84 Months",
      desc: "Choose comfortable monthly EMI repayment periods ranging up to 7 full years to keep cash flow smooth.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#f25c05]" />,
      title: "Zero Hidden Charges",
      desc: "Complete transparency. Zero surprise fees, full digital loan agreements, and zero foreclosure penalty after 6 months.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#f25c05]" />,
      title: "Same-Day Direct Disbursal",
      desc: "Approved funds transferred straight into your primary bank account via RTGS or IMPS within 24 hours.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#f25c05]" />,
      title: "Doorstep / Video Inspection",
      desc: "No need to drive to crowded bank branches. Quick video call verification or doorstep executive inspection.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#f25c05]" />,
      title: "100% RBI-Compliant Partners",
      desc: "Loans underwritten exclusively by India's top Tier-1 Banks & Systemically Important NBFCs.",
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#f25c05] bg-orange-100 border border-orange-200 px-3 py-1 rounded-full mb-3">
            Unmatched Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Why Choose Ambika Fintech?
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Designed for smart Indian vehicle owners who value speed, flexibility, and absolute control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#f25c05] hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
