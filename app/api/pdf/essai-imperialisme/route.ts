import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export const runtime = "nodejs"; // IMPORTANT

export async function GET() {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.goto("https://cato-heresie.vercel.app/essai", {
    waitUntil: "networkidle0",
  });

  const pdf = await page.pdf({
    format: "A4",
    margin: {
      top: "30mm",
      bottom: "30mm",
      left: "25mm",
      right: "25mm",
    },
  });

  await browser.close();

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=essai.pdf",
    },
  });
}
