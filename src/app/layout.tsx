import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACEMACAN FZ LLC — Diverse Solutions. One Standard.",
  description:
    "ACEMACAN FZ LLC connects businesses with trusted global suppliers, delivering MEP products, acoustic solutions, global procurement, and digital marketing services across UAE, China, and India.",
  keywords: [
    "ACEMACAN",
    "MEP Products",
    "Acoustic Solutions",
    "Global Procurement",
    "Digital Marketing",
    "UAE",
    "China",
    "India",
    "Safety Equipment",
    "Cable Management",
  ],
  openGraph: {
    title: "ACEMACAN FZ LLC — Diverse Solutions. One Standard.",
    description:
      "Multi-sector excellence in MEP, acoustics, global sourcing, and digital marketing.",
    type: "website",
    url: "https://acemacan.ae",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>{children}</body>
    </html>
  );
}
