import React from "react";
import { Check, X, Star } from "lucide-react";

export const ComparisonMatrix: React.FC = () => {
  return (
    <section id="comparison" className="py-16 bg-gradient-to-r from-[#e65100] via-[#f25c05] to-[#ea580c] text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Which loan is right for you? A Simple Comparison
          </h2>
          <p className="mt-2 text-orange-100 text-sm md:text-base leading-relaxed">
            See why borrowing against your vehicle through <strong>Ambika Fintech</strong> beats costly Personal Loans, inconvenient Gold Loans, and tedious Business Loans across every parameter.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-orange-300/40">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="p-4 text-xs font-bold uppercase text-slate-500 bg-slate-50 w-1/5">
                    Parameters
                  </th>
                  <th className="p-4 bg-[#f25c05] text-white w-2/5">
                    <div className="flex flex-col">
                      <span className="text-base font-black flex items-center gap-1">
                        ★ Ambika Loan Against Car
                      </span>
                      <span className="text-[10px] font-bold tracking-wider text-orange-200 uppercase">
                        Recommended Winner
                      </span>
                    </div>
                  </th>
                  <th className="p-4 text-xs font-bold uppercase text-slate-600 bg-slate-50 w-1/5">
                    Personal Loan
                  </th>
                  <th className="p-4 text-xs font-bold uppercase text-slate-600 bg-slate-50 w-1/5">
                    Gold Loan
                  </th>
                  <th className="p-4 text-xs font-bold uppercase text-slate-600 bg-slate-50 w-1/5">
                    Business Loan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
                <tr className="hover:bg-slate-50/70">
                  <td className="p-4 font-bold text-slate-800">Interest Rate (p.a.)</td>
                  <td className="p-4 font-bold text-[#c2410c] bg-orange-50/70 border-x border-orange-200">
                    <span className="text-base font-black">10.99% – 13.50%</span>
                    <div className="text-[11px] text-emerald-600 font-semibold">Lowest secured borrowing rate</div>
                  </td>
                  <td className="p-4 text-slate-600">14.50% – 24.00%</td>
                  <td className="p-4 text-slate-600">11.50% – 18.00%</td>
                  <td className="p-4 text-slate-600">16.00% – 28.00%</td>
                </tr>

                <tr className="hover:bg-slate-50/70">
                  <td className="p-4 font-bold text-slate-800">Max Loan Amount / LTV</td>
                  <td className="p-4 font-bold text-slate-900 bg-orange-50/70 border-x border-orange-200">
                    Up to 200% of Car Valuation
                    <div className="text-[11px] text-slate-500 font-normal">(Funding up to ₹50 Lakhs)</div>
                  </td>
                  <td className="p-4 text-slate-600">Capped to 3x–5x monthly salary</td>
                  <td className="p-4 text-slate-600">Up to 75% of physical gold weight</td>
                  <td className="p-4 text-slate-600">High turnover &amp; GST required</td>
                </tr>

                <tr className="hover:bg-slate-50/70">
                  <td className="p-4 font-bold text-slate-800">Asset In Use / Mobility</td>
                  <td className="p-4 font-bold text-emerald-700 bg-orange-50/70 border-x border-orange-200">
                    <span className="flex items-center gap-1.5 font-black text-sm">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      Keep &amp; Drive Your Car!
                    </span>
                    <div className="text-[11px] text-slate-500 font-normal">Zero disruption to daily routine</div>
                  </td>
                  <td className="p-4 text-slate-600">No asset, high rate burden</td>
                  <td className="p-4 text-slate-600">Gold locked in bank locker</td>
                  <td className="p-4 text-slate-600">Factory/property hypothecated</td>
                </tr>

                <tr className="hover:bg-slate-50/70">
                  <td className="p-4 font-bold text-slate-800">Repayment Tenure</td>
                  <td className="p-4 font-bold text-slate-900 bg-orange-50/70 border-x border-orange-200">
                    12 to 84 Months (Up to 7 Yrs)
                    <div className="text-[11px] text-slate-500 font-normal">Comfortable low monthly EMIs</div>
                  </td>
                  <td className="p-4 text-slate-600">12 to 48 Months</td>
                  <td className="p-4 text-slate-600">3 to 24 Months (Short tenure)</td>
                  <td className="p-4 text-slate-600">12 to 36 Months</td>
                </tr>

                <tr className="hover:bg-slate-50/70">
                  <td className="p-4 font-bold text-slate-800">Disbursal Speed</td>
                  <td className="p-4 font-bold text-emerald-700 bg-orange-50/70 border-x border-orange-200">
                    <span className="flex items-center gap-1 font-black">
                      ⚡ Same-Day / 24 Hours
                    </span>
                    <div className="text-[11px] text-slate-500 font-normal">Instant digital pre-sanction</div>
                  </td>
                  <td className="p-4 text-slate-600">2 to 4 Working Days</td>
                  <td className="p-4 text-slate-600">1 to 2 Working Days</td>
                  <td className="p-4 text-slate-600">10 to 20 Working Days</td>
                </tr>

                <tr className="hover:bg-slate-50/70">
                  <td className="p-4 font-bold text-slate-800">CIBIL / Credit Score</td>
                  <td className="p-4 font-bold text-slate-900 bg-orange-50/70 border-x border-orange-200">
                    Flexible (CIBIL 650+ Accepted)
                    <div className="text-[11px] text-slate-500 font-normal">Secured by car equity</div>
                  </td>
                  <td className="p-4 text-slate-600">Strict: 750+ mandatory</td>
                  <td className="p-4 text-slate-600">Relaxed</td>
                  <td className="p-4 text-slate-600">Very strict audited track</td>
                </tr>

                <tr className="hover:bg-slate-50/70">
                  <td className="p-4 font-bold text-slate-800">Foreclosure Charges</td>
                  <td className="p-4 font-bold text-slate-900 bg-orange-50/70 border-x border-orange-200">
                    Zero Penalty after 6 Months
                    <div className="text-[11px] text-slate-500 font-normal">Prepay anytime freely</div>
                  </td>
                  <td className="p-4 text-slate-600">Hefty 3% – 6% penalty</td>
                  <td className="p-4 text-slate-600">Minimal</td>
                  <td className="p-4 text-slate-600">4% – 5% penalty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-orange-100 opacity-90">
          * Terms underwritten by RBI-regulated Banks and NBFC partners based on applicant credit profile and vehicle RTO verification.
        </p>
      </div>
    </section>
  );
};
