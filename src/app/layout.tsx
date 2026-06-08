import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookie-consent/CookieConsentProvider";
import { CookieBanner } from "@/components/cookie-consent/CookieBanner";
import { ConsentModeScript } from "@/components/layout/ConsentModeScript";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationSchema,
  professionalServiceSchema,
} from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title:
    "Warranty Claim Expert Witness UK | M&A Disputes, Completion Accounts & Earn-Outs",
  description:
    "Find a qualified warranty claim expert witness in the UK. Forensic accountants for breach of warranty, completion accounts, earn-out disputes, locked box claims, and SPA litigation.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full`}>
      <head>
        <ConsentModeScript />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <CookieConsentProvider>
          <JsonLd data={[organizationSchema(), professionalServiceSchema()]} />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
