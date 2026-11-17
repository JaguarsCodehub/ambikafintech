import React from "react";

export const UseCases: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#f25c05] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Funds for Every Need — You Decide the Purpose
          </h2>
          <p className="mt-2 text-orange-100 text-sm md:text-base leading-relaxed">
            Unlike restrictive institutional loans, funds unlocked through Ambika Fintech have <strong>no end-use restrictions</strong>. Deploy capital wherever life demands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl transition hover:-translate-y-1">
            <img
              src="/images/usecase-business.svg"
              alt="Business Working Capital"
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Business &amp; Working Capital
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Purchase raw materials, fund seasonal festival inventory, or fulfill bulk purchase orders without waiting for lengthy collateral audits.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl transition hover:-translate-y-1">
            <img
              src="/images/usecase-medical.svg"
              alt="Medical &amp; Family Care"
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Emergency Medical &amp; Family Care
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meet unexpected hospitalization bills, surgeries, or family milestones without exhausting emergency savings or liquidating gold.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl transition hover:-translate-y-1">
            <img
              src="/images/usecase-debt.svg"
              alt="Debt Consolidation"
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Debt Consolidation &amp; Credit Cards
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Replace multiple 36% - 42% credit card revolvers with a single disciplined 10.99% car loan EMI, saving up to ₹2.5 Lakhs in interest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
