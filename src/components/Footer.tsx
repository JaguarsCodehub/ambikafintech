import React from "react";
import { ShieldCheck, Lock, Phone, Mail, MapPin, Instagram, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#f25c05] flex items-center justify-center text-white font-black text-lg shadow-md">
                ₹
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                AMBIKA<span className="text-[#f25c05]">FINTECH</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Ambika Fintech is your trusted financial partner based in Sakinaka, Mumbai. We provide seamless digital solutions for Car Loans, Car Top-Up Loans, Personal Loans, Home Loans, and Doorstep RC Transfer across Mumbai &amp; Maharashtra.
            </p>

            {/* Social & Contact Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://instagram.com/ambikafintech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 hover:bg-pink-500/20 transition font-bold"
              >
                <Instagram className="w-3.5 h-3.5" />
                @ambikafintech
              </a>
              <a
                href="https://wa.me/919870203737"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp: 9870203737
              </a>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-2">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                256-Bit SSL Encrypted
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified Lending Network
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#hero" className="hover:text-white transition">Home</a></li>
              <li><a href="/#services" className="hover:text-white transition">Our Services</a></li>
              <li><a href="/#comparison" className="hover:text-white transition">Loan Comparison</a></li>
              <li><a href="/#about" className="hover:text-white transition">How It Works</a></li>
              <li><a href="/#calculator" className="hover:text-white transition">EMI Calculator</a></li>
              <li><a href="/blog" className="hover:text-orange-400 font-bold transition text-[#f25c05]">Financial Blog (5)</a></li>
              <li><a href="/#faqs" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          {/* Our Services (Updated to exact 5 services) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#calculator" className="hover:text-white transition font-semibold text-slate-300">Car Topup Loan</a></li>
              <li><a href="#calculator" className="hover:text-white transition font-semibold text-slate-300">Car Loan</a></li>
              <li><a href="#calculator" className="hover:text-white transition font-semibold text-slate-300">Personal Loan</a></li>
              <li><a href="#calculator" className="hover:text-white transition font-semibold text-slate-300">Home Loan</a></li>
              <li><a href="#calculator" className="hover:text-white transition font-semibold text-slate-300">RC Transfer</a></li>
            </ul>
          </div>

          {/* Contact Details & Official Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Contact &amp; Location</h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#f25c05] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Dongare Sadan, Parerawadi, Mohili Village, Sakinaka, Mumbai - 400072
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f25c05] flex-shrink-0" />
                <a href="tel:9870203737" className="text-white font-bold hover:text-amber-300 transition">
                  +91 9870203737
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f25c05] flex-shrink-0" />
                <a href="mailto:info@ambikafinetch.in" className="hover:text-white transition">
                  info@ambikafinetch.in
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a href="https://instagram.com/ambikafintech" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline font-bold">
                  @ambikafintech
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-500 leading-relaxed space-y-3">
          <p>
            <strong>Regulatory Compliance &amp; Disclaimer:</strong> Ambika Fintech operates as a registered financial marketplace and loan channel partner based in Mumbai. Ambika Fintech connects clients with premier RBI-regulated Scheduled Commercial Banks and NBFCs. All loan sanctioning, credit appraisals, interest rates, and loan disbursements are executed strictly at the discretion of the partner lending institutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-2 text-slate-500">
            <span>© 2026 Ambika Fintech. All Rights Reserved. Dongare Sadan, Sakinaka, Mumbai - 72.</span>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
              <a href="#terms" className="hover:underline">Terms of Service</a>
              <a href="https://instagram.com/ambikafintech" target="_blank" rel="noopener noreferrer" className="hover:underline text-pink-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
