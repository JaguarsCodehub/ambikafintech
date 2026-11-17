"use client";

import React, { useState } from "react";
import { calculateEMI, formatIndianCurrency } from "@/data/car-database";
import { Calculator as CalcIcon, Send, CheckCircle2 } from "lucide-react";

interface CalculatorProps {
  onOpenModal: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenModal }) => {
  // Service Type Tab
  const [selectedService, setSelectedService] = useState<"Car Loan" | "Car Topup" | "Personal Loan" | "Home Loan">("Car Loan");

  // Default presets based on selected service
  const presets = {
    "Car Loan": { amount: 600000, rate: 10.99, tenure: 48, minAmt: 100000, maxAmt: 5000000 },
    "Car Topup": { amount: 400000, rate: 11.5, tenure: 36, minAmt: 100000, maxAmt: 2500000 },
    "Personal Loan": { amount: 300000, rate: 13.5, tenure: 36, minAmt: 50000, maxAmt: 2500000 },
    "Home Loan": { amount: 4000000, rate: 8.75, tenure: 180, minAmt: 500000, maxAmt: 15000000 },
  };

  const [loanAmount, setLoanAmount] = useState(600000);
  const [interestRate, setInterestRate] = useState(10.99);
  const [tenureMonths, setTenureMonths] = useState(48);
  const [sanctionSuccess, setSanctionSuccess] = useState(false);

  const handleServiceChange = (service: "Car Loan" | "Car Topup" | "Personal Loan" | "Home Loan") => {
    setSelectedService(service);
    const p = presets[service];
    setLoanAmount(p.amount);
    setInterestRate(p.rate);
    setTenureMonths(p.tenure);
  };

  // EMI Calculation
  const emiData = calculateEMI(loanAmount, interestRate, tenureMonths);
  const principalPercent = emiData.totalPayment > 0 ? Math.round((emiData.principal / emiData.totalPayment) * 100) : 75;
  const interestPercent = 100 - principalPercent;

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSanctionSuccess(true);
    setTimeout(() => {
      onOpenModal();
    }, 400);
  };

  return (
    <section id="calculator" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#f25c05] bg-orange-100 border border-orange-200 px-3 py-1 rounded-full mb-3">
            Accurate Financial Planner
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Interactive Loan EMI Calculator
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Select your loan category and adjust the sliders to calculate your exact monthly EMI, interest liability, and repayment schedule in real-time.
          </p>
        </div>

        {/* Loan Category Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-xl mx-auto">
          {(["Car Loan", "Car Topup", "Personal Loan", "Home Loan"] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleServiceChange(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedService === cat
                  ? "bg-[#f25c05] text-white shadow-md shadow-orange-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat === "Car Topup" ? "Car Topup Loan" : cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
            <div className="space-y-6">
              {/* Slider 1: Loan Amount */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="slider-loan-amt" className="text-sm font-bold text-slate-700">
                    Required {selectedService} Amount
                  </label>
                  <span className="text-lg font-black text-[#f25c05]">
                    {formatIndianCurrency(loanAmount)}
                  </span>
                </div>
                <input
                  id="slider-loan-amt"
                  type="range"
                  min={presets[selectedService].minAmt}
                  max={presets[selectedService].maxAmt}
                  step={selectedService === "Home Loan" ? 100000 : 25000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                  className="custom-range"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>{formatIndianCurrency(presets[selectedService].minAmt)}</span>
                  <span>{formatIndianCurrency((presets[selectedService].minAmt + presets[selectedService].maxAmt) / 2)}</span>
                  <span>{formatIndianCurrency(presets[selectedService].maxAmt)}</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="slider-interest-rt" className="text-sm font-bold text-slate-700">
                    Interest Rate (% p.a.)
                  </label>
                  <span className="text-lg font-black text-slate-800">{interestRate.toFixed(2)}%</span>
                </div>
                <input
                  id="slider-interest-rt"
                  type="range"
                  min="8.0"
                  max="22.0"
                  step="0.05"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  className="custom-range"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>8.0% (Prime)</span>
                  <span>14.0%</span>
                  <span>22.0%</span>
                </div>
              </div>

              {/* Slider 3: Tenure */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="slider-loan-tenure" className="text-sm font-bold text-slate-700">
                    Loan Tenure (Months)
                  </label>
                  <span className="text-lg font-black text-slate-800">
                    {tenureMonths} Months ({Math.round(tenureMonths / 12)} Yrs)
                  </span>
                </div>
                <input
                  id="slider-loan-tenure"
                  type="range"
                  min="12"
                  max={selectedService === "Home Loan" ? 360 : 84}
                  step={selectedService === "Home Loan" ? 12 : 6}
                  value={tenureMonths}
                  onChange={(e) => setTenureMonths(parseInt(e.target.value, 10))}
                  className="custom-range"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>12 Mo (1 Yr)</span>
                  <span>{selectedService === "Home Loan" ? "180 Mo (15 Yrs)" : "48 Mo (4 Yrs)"}</span>
                  <span>{selectedService === "Home Loan" ? "360 Mo (30 Yrs)" : "84 Mo (7 Yrs)"}</span>
                </div>
              </div>

              {/* Visual Breakdown */}
              <div className="pt-2">
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-800">■ Principal Amount: {principalPercent}%</span>
                  <span className="text-[#f25c05]">■ Total Interest: {interestPercent}%</span>
                </div>
                <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${principalPercent}%` }}
                    className="bg-slate-900 transition-all duration-300"
                  ></div>
                  <div
                    style={{ width: `${interestPercent}%` }}
                    className="bg-[#f25c05] transition-all duration-300"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Output Box & Instant Consultation */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dark Output Box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-400">
                Monthly EMI Payable ({selectedService})
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white mt-1 mb-6">
                {formatIndianCurrency(emiData.emi)}
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-700/80 pt-5 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Principal Amount</span>
                  <strong className="text-white text-sm font-bold">
                    {formatIndianCurrency(emiData.principal)}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Total Interest</span>
                  <strong className="text-amber-300 text-sm font-bold">
                    {formatIndianCurrency(emiData.totalInterest)}
                  </strong>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Total Repayment (Principal + Interest)</span>
                  <strong className="text-emerald-400 text-base font-extrabold">
                    {formatIndianCurrency(emiData.totalPayment)}
                  </strong>
                </div>
              </div>
            </div>

            {/* Quick Consultation Intake */}
            <div className="bg-orange-50/70 border-2 border-orange-200 rounded-3xl p-6">
              <h3 className="text-base font-black text-slate-900 mb-1">
                Apply for this {selectedService} Offer
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Speak directly with an Ambika Fintech loan officer in Sakinaka, Mumbai:
              </p>

              <form onSubmit={handleLeadSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name (as per PAN)"
                  required
                  className="w-full text-xs p-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                />
                <input
                  type="tel"
                  placeholder="10-digit Mobile Number"
                  maxLength={10}
                  required
                  className="w-full text-xs p-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                />
                <select className="w-full text-xs p-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f25c05]">
                  <option value="Mumbai - Sakinaka / Andheri">Mumbai - Sakinaka / Andheri</option>
                  <option value="Mumbai - Powai / Ghatkopar">Mumbai - Powai / Ghatkopar</option>
                  <option value="Mumbai - Borivali / Malad">Mumbai - Borivali / Malad</option>
                  <option value="Thane / Navi Mumbai">Thane / Navi Mumbai</option>
                  <option value="Other Maharashtra">Other Location</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-[#f25c05] hover:bg-[#d94e02] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {sanctionSuccess ? "✓ Application Received!" : "Check Eligibility & Get Free Callback"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
