import React from "react";
import { ArrowRight, Award, TrendingUp } from "lucide-react";

export const TrustStories: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-slate-900">Stories of Empowerment</h2>
          <p className="mt-2 text-slate-600 text-sm">
            See how smart vehicle refinancing is helping Indian families protect their aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Story 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6">
              <span className="inline-flex items-center gap-1 bg-[#f25c05] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full mb-3 uppercase">
                <Award className="w-3 h-3" />
                Higher Education
              </span>
              <h3 className="text-lg font-bold">Funding College Without Liquidating Gold</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                How Mr. Alok Saxena secured ₹12 Lakhs against his Mahindra XUV700 within 24 hours to pay overseas engineering admission fees.
              </p>
            </div>
            <div className="p-4 flex justify-between items-center text-xs font-semibold text-slate-600">
              <span>Delhi NCR • ₹12,00,000 Disbursed</span>
              <a href="#calculator" className="text-[#f25c05] font-bold flex items-center gap-1 hover:underline">
                Explore Loan <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="bg-gradient-to-r from-[#c2410c] to-[#f25c05] text-white p-6">
              <span className="inline-flex items-center gap-1 bg-slate-900 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full mb-3 uppercase">
                <TrendingUp className="w-3 h-3" />
                MSME Seasonal Surge
              </span>
              <h3 className="text-lg font-bold">Diwali Festival Inventory Scaling</h3>
              <p className="text-xs text-orange-100 mt-2 leading-relaxed">
                Doubled festive showroom inventory in Jaipur by securing ₹5 Lakhs against Maruti Swift without business collateral delay.
              </p>
            </div>
            <div className="p-4 flex justify-between items-center text-xs font-semibold text-slate-600">
              <span>Jaipur • ₹5,00,000 Disbursed</span>
              <a href="#calculator" className="text-[#f25c05] font-bold flex items-center gap-1 hover:underline">
                Explore Loan <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
