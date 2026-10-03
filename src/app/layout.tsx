import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Tanvir Anjum Sazid | Banking, Administration & Customer Service Professional",
  description:
    "Official corporate portfolio & CV of Tanvir Anjum Sazid - Aspiring Banking, Administration, Customer Service, and Financial Documentation Specialist in Chattogram, Bangladesh.",
  keywords: [
    "Tanvir Anjum Sazid",
    "Banking Operations",
    "Administration",
    "Customer Service",
    "KYC",
    "AML",
    "MS Excel",
    "VLOOKUP",
    "Office Coordination",
    "Chattogram",
    "Bangladesh",
  ],
  authors: [{ name: "Tanvir Anjum Sazid" }],
  openGraph: {
    title: "Tanvir Anjum Sazid | Corporate Portfolio & Official CV",
    description:
      "Aspiring professional in Banking, Administration, Customer Service, Documentation, and Office Coordination. Download CV & review verified credentials.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
