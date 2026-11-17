import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blog-data";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  CheckCircle2,
  Phone,
  MessageSquare,
  HelpCircle,
  Share2,
} from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: "Post Not Found | Ambika Fintech" };
  }
  return {
    title: `${post.title} | Ambika Fintech`,
    description: post.excerpt,
  };
}

export default function BlogPostDetail({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />

      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-slate-900 text-white py-14">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-orange-300 hover:text-white transition mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-[#f25c05] text-white tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Author bar */}
            <div className="mt-6 flex items-center gap-3 pt-6 border-t border-slate-800">
              <div className="w-10 h-10 rounded-full bg-[#f25c05] text-white flex items-center justify-center font-bold text-sm">
                {post.author.avatar}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{post.author.name}</div>
                <div className="text-xs text-slate-400">{post.author.role}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Key Takeaways Box */}
            <div className="bg-orange-50/80 border-2 border-orange-200 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
              <h2 className="text-base font-black text-[#c2410c] uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#f25c05]" />
                Key Takeaways
              </h2>
              <ul className="space-y-2.5">
                {post.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#f25c05] mt-1.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Article Body Text */}
            <article className="prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700">
              <div
                className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">$1</h3>')
                    .replace(/## (.*?)\n/g, '<h2 class="text-2xl font-black text-slate-900 mt-8 mb-4 border-b pb-2">$1</h2>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
                    .replace(/---/g, '<hr class="my-6 border-slate-200" />')
                    .replace(/\n\n/g, '<p class="my-4 leading-relaxed">')
                    .replace(/<p class="my-4 leading-relaxed">- (.*?)/g, '<li class="ml-4 list-disc text-slate-700">$1</li>'),
                }}
              />
            </article>

            {/* Article FAQs if available */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#f25c05]" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {post.faqs.map((faq, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <h4 className="font-bold text-slate-900 text-sm mb-2">{faq.q}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Consultation Card */}
            <div className="mt-12 bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#f25c05] text-white rounded-3xl p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-black uppercase text-amber-200">Ambika Fintech Mumbai Desk</span>
                <h3 className="text-2xl font-black text-white mt-1">
                  Have Questions About This Loan?
                </h3>
                <p className="text-xs text-orange-100 mt-1 max-w-md">
                  Our loan officers in Sakinaka, Mumbai are ready to guide you with paperless processing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href="tel:9870203737"
                  className="w-full sm:w-auto bg-slate-900 hover:bg-black text-white font-bold px-6 py-3.5 rounded-xl text-xs transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#f25c05]" />
                  Call 9870203737
                </a>
                <a
                  href="https://wa.me/919870203737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
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
