import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wavizo.nl"),
  title: "Wavizo - Professionele Webdesign & Ontwikkeling",
  description: "Wavizo biedt premium, award-winning webdesign en ontwikkeling diensten. Van high-converting maatwerkwebsites tot robuuste e-commerce oplossingen. Neem contact op voor een gratis consult.",
  keywords: ["webdesign", "website ontwikkeling", "e-commerce", "SEO", "responsive design", "Nederland", "web agency", "conversie optimalisatie"],
  openGraph: {
    title: "Wavizo - Professionele Webdesign & Ontwikkeling",
    description: "Premium webdesign bureau gespecialiseerd in high-converting websites en maatwerk applicaties.",
    url: "https://wavizo.nl",
    siteName: "Wavizo",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Wavizo Logo",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wavizo - Professionele Webdesign",
    description: "Premium webdesign bureau gespecialiseerd in high-converting websites en maatwerk applicaties.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${inter.variable} scroll-smooth antialiased bg-[#0A0A0B] text-white`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <CustomCursor />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
