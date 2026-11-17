import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      mobileNumber,
      service,
      loanAmount,
      city,
      employment,
      vehicleNumber,
      notes,
    } = body;

    // Validate essential inputs
    if (!mobileNumber || mobileNumber.length < 10) {
      return NextResponse.json(
        { success: false, error: "Valid 10-digit mobile number is required" },
        { status: 400 }
      );
    }

    const leadPayload = {
      timestamp: new Date().toISOString(),
      leadId: `AMB-${Date.now().toString().slice(-6)}`,
      fullName: fullName || "Website Lead",
      mobileNumber,
      service: service || "Loan Consultation",
      loanAmount: loanAmount || "Not specified",
      city: city || "Mumbai",
      employment: employment || "Not specified",
      vehicleNumber: vehicleNumber || "N/A",
      notes: notes || "Direct website application",
      source: "Ambika Fintech Website Lead Form",
    };

    console.log("------------------------------------------");
    console.log("📥 NEW AMBIKA FINTECH LEAD RECEIVED:");
    console.log(leadPayload);
    console.log("------------------------------------------");

    // Optional webhook forwarding to Google Sheets / AppSheet / Google Apps Script
    const GOOGLE_SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload),
        });
        console.log("✅ Lead pushed to Google Sheet webhook successfully.");
      } catch (sheetError) {
        console.error("⚠️ Failed to forward to Google Sheets webhook:", sheetError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully! Our advisor will contact you within 15 minutes.",
        leadId: leadPayload.leadId,
        lead: leadPayload,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing lead application:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
