import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-data";
import { BookOpen, ArrowRight, Clock, User } from "lucide-react";

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#f25c05] bg-orange-100 border border-orange-200 px-3 py-1 rounded-full mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Financial Insights &amp; Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Latest Articles &amp; Smart Borrowing Tips
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Expert advice on vehicle refinancing, personal loans, Mumbai RTO RC transfer, and reducing your interest liabilities.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#f25c05] hover:text-[#d94e02] transition group"
          >
            Browse All 5 Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5-Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="p-6 pb-0">
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
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug group-hover:text-[#f25c05] transition">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px] font-medium">
                  {post.date}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-[#f25c05] group-hover:underline inline-flex items-center gap-1"
                >
                  Read Guide &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Additional 2 Articles in a 2-Column Banner */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {BLOG_POSTS.slice(3, 5).map((post) => (
            <article
              key={post.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {post.readTime}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug group-hover:text-[#f25c05] transition">
                    {post.title}
                  </h3>
                </Link>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px] font-medium">
                  {post.date}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-[#f25c05] group-hover:underline inline-flex items-center gap-1"
                >
                  Read Guide &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
