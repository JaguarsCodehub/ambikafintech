import React from "react";
import { ArrowRight, Zap } from "lucide-react";

interface CtaBannerProps {
  onOpenModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenModal }) => {
  return (
    <section className="py-14 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#f25c05] flex items-center gap-1.5 mb-2">
            <Zap className="w-4 h-4 fill-current" />
            Fast Track Application
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Get Car Loan up to 200% of your car value.
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Zero paperwork hassle. Keep driving your car with full pride. Disbursed within 24 hours.
          </p>
        </div>

        <button
          onClick={onOpenModal}
          className="bg-[#f25c05] hover:bg-[#d94e02] text-white px-8 py-4 rounded-xl font-black text-base shadow-lg shadow-orange-500/20 transition hover:scale-105 flex items-center gap-2 flex-shrink-0"
        >
          Apply Now <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
