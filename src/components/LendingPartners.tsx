import React from "react";

export const LendingPartners: React.FC = () => {
  return (
    <section className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
          Our Lending Partners — 25+ RBI Regulated Banks &amp; NBFCs
        </p>

        <div className="flex justify-center overflow-x-auto pb-2">
          <img
            src="/images/bank-logos-strip.svg"
            alt="Ambika Fintech Partner Banks &amp; NBFCs"
            className="max-w-4xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
