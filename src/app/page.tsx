"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ComparisonMatrix } from "@/components/ComparisonMatrix";
import { ProductExplainer } from "@/components/ProductExplainer";
import { Testimonial } from "@/components/Testimonial";
import { LendingPartners } from "@/components/LendingPartners";
import { DocumentsChecklist } from "@/components/DocumentsChecklist";
import { UseCases } from "@/components/UseCases";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TrustStories } from "@/components/TrustStories";
import { Calculator } from "@/components/Calculator";
import { FaqAccordion } from "@/components/FaqAccordion";
import { OtherServices } from "@/components/OtherServices";
import { BlogSection } from "@/components/BlogSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { EligibilityModal } from "@/components/EligibilityModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialCar, setModalInitialCar] = useState("");

  const handleOpenModal = (carName?: string) => {
    setModalInitialCar(carName || "");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Helpline & Announcement Top Bar */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <Navbar onOpenModal={() => handleOpenModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section with Quick Lead Intake */}
        <Hero onCheckEligibility={(car) => handleOpenModal(car)} />

        {/* 4. Signature Comparison Matrix (Red/Orange Container) */}
        <ComparisonMatrix />

        {/* 5. What is Loan Against Car? (Dual Tabs) */}
        <ProductExplainer onOpenModal={() => handleOpenModal()} />

        {/* 6. Social Proof / Customer Spotlight */}
        <Testimonial />

        {/* 7. Lending Partners Strip */}
        <LendingPartners />

        {/* 8. Required Documents & Eligibility Criteria */}
        <DocumentsChecklist />

        {/* 9. Funds for Every Need - Use Cases (Orange Container) */}
        <UseCases />

        {/* 10. Why Choose Ambika Fintech (9-Card Feature Grid) */}
        <WhyChooseUs />

        {/* 11. Trust & Awareness Stories */}
        <TrustStories />

        {/* 12. Interactive Indian Car Valuation & Live EMI Calculator */}
        <Calculator onOpenModal={() => handleOpenModal()} />

        {/* 13. Financial Insights & Blogs */}
        <BlogSection />

        {/* 14. FAQ Accordion */}
        <FaqAccordion />

        {/* 15. Other Vehicle Loan Services */}
        <OtherServices />

        {/* 16. Final High-Impact Conversion CTA */}
        <CtaBanner onOpenModal={() => handleOpenModal()} />
      </main>

      {/* 16. Comprehensive Regulatory Footer */}
      <Footer />

      {/* 17. Interactive 30-Second Eligibility Modal */}
      <EligibilityModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialCar={modalInitialCar}
      />
    </div>
  );
}
