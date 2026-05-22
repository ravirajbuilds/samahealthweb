import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F766E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://samahealth.in"),
  title: "SamaHealth — Cardiac screening for every clinic in India",
  description:
    "SamaHealth equips primary clinics and ASHA workers with offline-first cardiac screening, AI triage, and supervisor oversight — built for India's last-mile.",
  keywords: [
    "cardiac screening India",
    "ASHA worker app",
    "primary clinic AI",
    "rural cardiology",
    "SamaHealth",
    "SamaBeat",
    "DPDPA compliant health",
  ],
  authors: [{ name: "SamaHealth" }],
  openGraph: {
    title: "SamaHealth — Cardiac screening for every clinic in India",
    description:
      "Offline-first cardiac screening for ASHA workers and primary clinics. Clinical-grade AI, DPDPA-compliant, deployed in asia-south1.",
    url: "https://samahealth.in",
    siteName: "SamaHealth",
    type: "website",
    images: [
      {
        url: "/events/anubhav-cmc-001.jpg",
        width: 1200,
        height: 630,
        alt: "SamaHealth field team at an Anubhav CMC blood donation camp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SamaHealth — Cardiac screening for every clinic in India",
    description:
      "Offline-first cardiac screening for ASHA workers and primary clinics. DPDPA-compliant, deployed in asia-south1.",
    images: ["/events/anubhav-cmc-001.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
