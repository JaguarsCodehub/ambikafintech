import React from "react";
import { Phone, Clock, MessageSquare, Instagram, Mail } from "lucide-react";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Contact Numbers & Time */}
        <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
          <a
            href="tel:9870203737"
            className="flex items-center gap-1.5 text-amber-400 font-bold hover:text-amber-300 transition"
          >
            <Phone className="w-3.5 h-3.5" />
            Call: 9870203737
          </a>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <a
            href="mailto:info@ambikafinetch.in"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition"
          >
            <Mail className="w-3.5 h-3.5 text-[#f25c05]" />
            info@ambikafinetch.in
          </a>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            Mon - Sat: 9:00 AM – 8:00 PM IST
          </span>
        </div>

        {/* WhatsApp & Instagram Links */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href="https://wa.me/919870203737?text=Hi%20Ambika%20Fintech,%20I%20want%20to%20inquire%20about%20loans"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 font-semibold hover:text-emerald-300 transition"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp: 9870203737
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="https://instagram.com/ambikafintech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-pink-400 font-semibold hover:text-pink-300 transition"
          >
            <Instagram className="w-3.5 h-3.5" />
            @ambikafintech
          </a>
        </div>
      </div>
    </div>
  );
};
