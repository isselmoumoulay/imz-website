import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({ 
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather"
});

export const metadata: Metadata = {
  title: "IMZ - Solutions Informatiques Innovantes sur Mesure",
  description: "IMZ vous accompagne dans votre transformation digitale avec des solutions informatiques innovantes et sur-mesure. Développement web, applications mobiles, conseil IT et plus encore.",
  keywords: ["IMZ", "solutions informatiques", "développement web", "applications mobiles", "transformation digitale", "conseil IT", "innovation technologique"],
  authors: [{ name: "IMZ" }],
  creator: "IMZ",
  publisher: "IMZ",
  metadataBase: new URL('https://imz-website.pages.dev'),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "ar_SA"],
    url: "https://imz-website.pages.dev",
    title: "IMZ - Solutions Informatiques Innovantes sur Mesure",
    description: "IMZ vous accompagne dans votre transformation digitale avec des solutions informatiques innovantes et sur-mesure.",
    siteName: "IMZ",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IMZ - Solutions Informatiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMZ - Solutions Informatiques Innovantes sur Mesure",
    description: "IMZ vous accompagne dans votre transformation digitale avec des solutions informatiques innovantes et sur-mesure.",
    images: ["/images/og-image.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

// Import dynamique avec lazy
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={merriweather.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} ${merriweather.variable} antialiased`}>
        <Suspense fallback={<div className="h-16 bg-white shadow-md" />}>
          <Navbar />
        </Suspense>
        {children}
        <Suspense fallback={<div className="h-32 bg-gray-100" />}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
