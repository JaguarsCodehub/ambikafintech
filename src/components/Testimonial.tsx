import React from "react";
import { Star } from "lucide-react";

export const Testimonial: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Stars */}
        <div className="flex justify-center gap-1 text-amber-500 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>

        <blockquote className="text-xl sm:text-2xl font-semibold text-slate-800 italic leading-relaxed">
          &ldquo;I urgently needed ₹6.5 Lakhs of working capital for my textile consignment in Ahmedabad. Banks were taking 2 weeks for business loans. Ambika Fintech verified my Hyundai Creta RC digitally, gave me funds in my account in 22 hours, and I never had to stop driving my car!&rdquo;
        </blockquote>

        <div className="mt-5 flex items-center justify-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#f25c05] text-white flex items-center justify-center font-bold text-sm shadow-md">
            RV
          </div>
          <div className="text-left">
            <div className="font-bold text-slate-900 text-sm">Rajesh V. Patel</div>
            <div className="text-xs text-slate-500">
              Textile Manufacturer, Ahmedabad • Hyundai Creta SX (₹6,50,000 Unlocked)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
