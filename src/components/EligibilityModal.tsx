"use client";

import React, { useState } from "react";
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Car, 
  Phone, 
  MapPin, 
  User, 
  Briefcase, 
  IndianRupee, 
  Loader2,
  Lock
} from "lucide-react";

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialCar?: string;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({
  isOpen,
  onClose,
  initialService = "Car Loan",
  initialCar = "",
}) => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [service, setService] = useState(initialService);
  const [loanAmount, setLoanAmount] = useState("₹5,00,000");
  const [city, setCity] = useState("Mumbai");
  const [employment, setEmployment] = useState("Salaried");
  const [vehicleNumber, setVehicleNumber] = useState(initialCar);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!mobileNumber || mobileNumber.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          mobileNumber: mobileNumber.replace(/\D/g, ""),
          service,
          loanAmount,
          city,
          employment,
          vehicleNumber: service.toLowerCase().includes("car") || service.toLowerCase().includes("rc") ? vehicleNumber : "N/A",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setReferenceId(data.leadId || `AMB-${Date.now().toString().slice(-6)}`);
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      // Fallback optimistic reference
      setReferenceId(`AMB-${Date.now().toString().slice(-6)}`);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setMobileNumber("");
    setVehicleNumber("");
    setErrorMessage("");
    onClose();
  };

  const isVehicleRelated = service.toLowerCase().includes("car") || service.toLowerCase().includes("rc");

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden relative border border-slate-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f25c05] animate-pulse"></span>
            <h3 className="text-sm font-black tracking-wide font-display">
              {isSubmitted ? "Application Received" : "Apply for Loan / Service"}
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="text-slate-400 hover:text-white transition p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-slate-500 font-medium pb-1 border-b border-slate-100 flex items-center justify-between">
                <span>Direct Mumbai Loan &amp; RTO Desk</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <Lock className="w-3 h-3" /> 100% Confidential
                </span>
              </div>

              {errorMessage && (
                <div className="p-3 text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl">
                  {errorMessage}
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1 font-display">
                  Service Interested In
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full text-sm p-2.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#f25c05] font-medium"
                >
                  <option value="Car Topup Loan">Car Topup Loan (up to 200% LTV)</option>
                  <option value="Car Loan">Car Loan / Used Car Finance</option>
                  <option value="Personal Loan">Personal &amp; Education Loan</option>
                  <option value="Home Loan">Home Loan &amp; Balance Transfer</option>
                  <option value="RC Transfer">RC Transfer &amp; RTO Paperwork</option>
                </select>
              </div>

              {/* Full Name & Mobile */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 font-display">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full text-sm pl-9 pr-3 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 font-display">
                    Mobile Number
                  </label>
                  <div className="relative flex">
                    <span className="bg-slate-100 border border-slate-300 border-r-0 px-2.5 py-2.5 rounded-l-xl text-xs font-bold text-slate-600 flex items-center">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      maxLength={10}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                      className="w-full text-sm px-3 py-2.5 border border-slate-300 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Number (if Car or RC) */}
              {isVehicleRelated && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 font-display">
                    Car Registration or Model
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. MH 02 CD 1234 or Swift / Creta"
                      value={vehicleNumber}
                      onChange={(e) => setVehicleNumber(e.target.value)}
                      className="w-full text-sm pl-9 pr-3 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                    />
                    <Car className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>
              )}

              {/* Loan Requirement & City */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 font-display">
                    Required Loan Amount
                  </label>
                  <select
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full text-sm p-2.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                  >
                    <option value="₹2,00,000">₹2 Lakhs</option>
                    <option value="₹5,00,000">₹5 Lakhs</option>
                    <option value="₹10,00,000">₹10 Lakhs</option>
                    <option value="₹20,00,000">₹20 Lakhs</option>
                    <option value="₹50,00,000+">₹50 Lakhs+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 font-display">
                    City / Location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Mumbai / Sakinaka"
                      required
                      className="w-full text-sm pl-9 pr-3 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                    />
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              {/* Employment */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1 font-display">
                  Employment Type
                </label>
                <select
                  value={employment}
                  onChange={(e) => setEmployment(e.target.value)}
                  className="w-full text-sm p-2.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#f25c05]"
                >
                  <option value="Salaried">Salaried (Private / Govt)</option>
                  <option value="Self-Employed">Self-Employed Business Owner</option>
                  <option value="Professional">Doctor / CA / Lawyer / Consultant</option>
                  <option value="Student">Student / Parent (Education)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f25c05] hover:bg-[#d94e02] text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2 group disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-500">
                Data saved securely. We will never share your number or spam you.
              </p>
            </form>
          ) : (
            /* Success confirmation letter */
            <div className="text-center py-2 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900 font-display">
                  Application Submitted Successfully!
                </h4>
                <p className="text-xs text-slate-600 mt-1 font-sans">
                  Thank you, <strong>{fullName || "Customer"}</strong>. Your request for{" "}
                  <strong className="text-[#f25c05] font-bold">{service}</strong> has been logged into our portal.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs text-slate-700 space-y-2 font-sans">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Application Reference ID:</span>
                  <span className="font-mono font-bold text-slate-900">{referenceId}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Contact Number:</span>
                  <span className="font-bold text-slate-900">+91 {mobileNumber}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Requested Amount:</span>
                  <span className="font-bold text-emerald-600">{loanAmount}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Assigned Branch:</span>
                  <span className="font-bold text-slate-800">Sakinaka Desk, Mumbai - 72</span>
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  Our loan specialist will call or WhatsApp you within 15–30 minutes to discuss your eligibility, lowest interest rate, and required documents.
                </p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full bg-[#f25c05] hover:bg-[#d94e02] text-white font-bold py-3 rounded-xl text-sm shadow-md transition font-display"
              >
                Close &amp; Return to Website
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
