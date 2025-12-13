import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function GET() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/essai", {
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

 return new NextResponse(Buffer.from(pdf), {
  headers: {
    "Content-Type": "application/pdf",
    "Content-Disposition": "inline; filename=essai.pdf",
  },
});
}
