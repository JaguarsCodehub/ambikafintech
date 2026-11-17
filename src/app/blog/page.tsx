import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blog-data";
import { Clock, BookOpen, ArrowRight, ShieldCheck, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Blogs & Guides | Ambika Fintech Mumbai",
  description:
    "Read expert guides on Car Loans, Car Top-Up Loans, Personal Loans, Home Loan Balance Transfers, and Mumbai RTO RC Transfers.",
};

export default function BlogListingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />

      <main className="flex-1">
        {/* Blog Header Banner */}
        <section className="bg-gradient-to-b from-orange-50/60 to-white py-14 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#f25c05] bg-orange-100 border border-orange-200 px-3.5 py-1 rounded-full mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Ambika Fintech Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Smart Borrowing &amp; Financial Guides
            </h1>
            <p className="mt-3 text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
              Actionable guides written by Mumbai loan specialists to help you save on interest, improve your CIBIL score, and transfer vehicle ownership smoothly.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-orange-100 text-[#c2410c] tracking-wider">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-lg font-black text-slate-900 leading-snug group-hover:text-[#f25c05] transition">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Key Takeaway snippet */}
                    <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-700">
                      <strong>Key Insight:</strong> {post.keyTakeaways[0]}
                    </div>
                  </div>

                  <div className="p-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px] font-medium">
                      {post.date}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-bold text-[#f25c05] group-hover:underline inline-flex items-center gap-1"
                    >
                      Read Full Article &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Help Callout Banner */}
            <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#f25c05]">
                  Need Personalized Financial Assistance?
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  Speak Directly with a Loan Officer in Mumbai
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Get custom quotes on Car Top-Up Loans, Personal Loans, Home Loans, and RC Transfer.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href="tel:9870203737"
                  className="bg-[#f25c05] hover:bg-[#d94e02] text-white font-bold px-6 py-3 rounded-xl text-sm transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call 9870203737
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
