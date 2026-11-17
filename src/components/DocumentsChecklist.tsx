import React from "react";
import { FileText, ShieldAlert, CreditCard, Landmark, Calendar, UserCheck } from "lucide-react";

export const DocumentsChecklist: React.FC = () => {
  const docs = [
    {
      num: "1",
      icon: <FileText className="w-5 h-5 text-[#f25c05]" />,
      title: "Vehicle RC Copy",
      desc: "Registration Certificate in the borrower's or co-borrower's name. (Commercial & Private both accepted).",
    },
    {
      num: "2",
      icon: <ShieldAlert className="w-5 h-5 text-[#f25c05]" />,
      title: "Valid Car Insurance",
      desc: "Active Comprehensive or Third-Party motor insurance policy copy with active coverage.",
    },
    {
      num: "3",
      icon: <CreditCard className="w-5 h-5 text-[#f25c05]" />,
      title: "KYC: PAN & Aadhaar",
      desc: "Instant DigiLocker e-KYC integration for paperless identity and address authentication.",
    },
    {
      num: "4",
      icon: <Landmark className="w-5 h-5 text-[#f25c05]" />,
      title: "6 Months Bank Statement",
      desc: "Latest 6 months bank statement showing regular operational transactions or salary credit.",
    },
    {
      num: "5",
      icon: <Calendar className="w-5 h-5 text-[#f25c05]" />,
      title: "Vehicle Age Threshold",
      desc: "Vehicle age should be less than 10 to 12 years at the end of requested loan tenure.",
    },
    {
      num: "6",
      icon: <UserCheck className="w-5 h-5 text-[#f25c05]" />,
      title: "Applicant Eligibility",
      desc: "Salaried individuals, self-employed businessmen, MSME proprietors, and gig entrepreneurs welcome.",
    },
  ];

  return (
    <section id="documents" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#f25c05] bg-orange-100 border border-orange-200 px-3 py-1 rounded-full mb-3">
            100% Paperless Hassle-Free
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Minimum Documents. Instant Eligibility.
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            No long stacks of paperwork. Get sanctioned with basic KYC and your vehicle RC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-orange-300 transition-all flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
