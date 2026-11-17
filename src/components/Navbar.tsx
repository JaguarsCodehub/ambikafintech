"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAction = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      window.location.href = "/#calculator";
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-[#f25c05] flex items-center justify-center text-white font-black text-xl shadow-md">
            ₹
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-slate-900 leading-none">
              AMBIKA<span className="text-[#f25c05]">FINTECH</span>
            </div>
            <span className="block text-[9px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">
              Loan Against Car • Refinance
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <a href="/#hero" className="hover:text-[#f25c05] transition">Home</a>
          <a href="/#services" className="hover:text-[#f25c05] transition">Our Services</a>
          <a href="/#comparison" className="hover:text-[#f25c05] transition">Comparison</a>
          <a href="/#about" className="hover:text-[#f25c05] transition">How It Works</a>
          <a href="/#calculator" className="hover:text-[#f25c05] transition">EMI Calculator</a>
          <a href="/blog" className="hover:text-[#f25c05] transition text-[#f25c05] font-bold">Blog</a>
          <a href="/#faqs" className="hover:text-[#f25c05] transition">FAQs</a>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleAction}
            className="hidden sm:inline-flex items-center gap-2 bg-[#f25c05] hover:bg-[#d94e02] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md transition hover:-translate-y-0.5"
          >
            <ShieldCheck className="w-4 h-4" />
            Apply Now
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#f25c05]"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#f25c05]"
          >
            Our Services
          </a>
          <a
            href="#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#f25c05]"
          >
            Loan Comparison
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#f25c05]"
          >
            How Loan Against Car Works
          </a>
          <a
            href="#documents"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#f25c05]"
          >
            Eligibility &amp; Documents
          </a>
          <a
            href="/#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#f25c05]"
          >
            Loan EMI Calculator
          </a>
          <a
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#f25c05] hover:underline"
          >
            Financial Guides &amp; Blog
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#f25c05]"
          >
            Why Choose Ambika
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-800 hover:text-[#f25c05]"
          >
            FAQs
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleAction();
            }}
            className="w-full bg-[#f25c05] text-white py-2.5 rounded-lg font-bold text-sm shadow-md"
          >
            Check Instant Eligibility
          </button>
        </div>
      )}
    </header>
  );
};
