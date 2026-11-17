import React from "react";
import { Car, PlusCircle, User, Home, FileText, ArrowRight } from "lucide-react";

interface OtherServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const OtherServices: React.FC<OtherServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      title: "Car Topup Loan",
      tagline: "Extra Cash on Ongoing Loan",
      desc: "Already paying an EMI on your vehicle? Unlock instant additional liquidity up to ₹15 Lakhs without breaking your existing loan.",
      icon: <PlusCircle className="w-6 h-6 text-[#f25c05]" />,
      badge: "Fastest Approval",
    },
    {
      title: "Car Loan",
      tagline: "New & Used Four-Wheelers",
      desc: "Competitive interest rates starting 10.99% p.a. for buying pre-owned or brand new cars with up to 90% on-road funding.",
      icon: <Car className="w-6 h-6 text-[#f25c05]" />,
      badge: "High LTV",
    },
    {
      title: "Personal Loan",
      tagline: "Instant Unsecured Capital",
      desc: "Quick emergency financing for weddings, medical emergencies, travel, or home improvements with paperless digital KYC.",
      icon: <User className="w-6 h-6 text-[#f25c05]" />,
      badge: "Zero Collateral",
    },
    {
      title: "Home Loan",
      tagline: "Affordable Housing Finance",
      desc: "Turnkey home purchase, balance transfer, and construction loans with flexible 30-year tenures and premier bank tie-ups.",
      icon: <Home className="w-6 h-6 text-[#f25c05]" />,
      badge: "Lowest Interest",
    },
    {
      title: "RC Transfer",
      tagline: "Hassle-Free RTO Solutions",
      desc: "Seamless vehicle ownership name transfer, hypothecation endorsement, NOC issuance, and clearance services across Mumbai RTOs.",
      icon: <FileText className="w-6 h-6 text-[#f25c05]" />,
      badge: "Doorstep Service",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#f25c05] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-black uppercase tracking-wider text-amber-200 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full mb-3">
            Our Financial Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Comprehensive Financial &amp; RTO Services
          </h2>
          <p className="mt-2 text-orange-100 text-sm sm:text-base leading-relaxed">
            Tailored retail lending, asset refinancing, and vehicle ownership solutions powered by Ambika Fintech Mumbai.
          </p>
        </div>

        {/* 5 Service Cards Grid with Zero Overflow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-slate-900 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-200 flex flex-col justify-between group border border-orange-100"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-orange-100 text-[#c2410c]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <span className="text-[11px] font-bold text-[#f25c05] block mb-2">
                  {item.tagline}
                </span>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#f25c05]">
                <span>Apply Online</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
