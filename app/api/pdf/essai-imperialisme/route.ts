import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export const runtime = "nodejs";

export async function GET() {
  console.log("🚀 API PDF appelée");

  try {
    console.log("📦 chromium.executablePath() start");
    const executablePath = await chromium.executablePath();
    console.log("📦 chromium path:", executablePath);

    console.log("🌐 launch browser");
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: true,
    });

    console.log("🧭 new page");
    const page = await browser.newPage();

    console.log("➡️ goto page");
    await page.goto("https://cato-heresie.vercel.app/essai", {
      waitUntil: "networkidle0",
      timeout: 60_000,
    });

    console.log("🖨️ generate pdf");
    const pdf = await page.pdf({
      format: "A4",
      margin: {
        top: "30mm",
        bottom: "30mm",
        left: "25mm",
        right: "25mm",
      },
    });

    console.log("📄 pdf size:", pdf.length);

    console.log("❌ close browser");
    await browser.close();

    console.log("✅ success");
    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=essai.pdf",
      },
    });
  } catch (err) {
    console.error("💥 PDF ERROR:", err);

    return NextResponse.json(
      {
        error: "PDF generation failed",
        details:
          err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
