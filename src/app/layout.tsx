import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ambika Fintech | Instant Loan Against Car (Car Par Loan) up to 200% Valuation",
  description:
    "Unlock instant funds against your car with Ambika Fintech. Get up to 200% of your car's market value at interest rates starting 10.99% p.a. Retain driving rights with same-day disbursal across India.",
  keywords: [
    "Loan against car",
    "Car par loan",
    "Car refinance India",
    "Vehicle equity loan",
    "Used car loan",
    "Car loan top up",
    "Ambika Fintech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
