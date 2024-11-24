import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ShadeProvider } from "@/context/useShade";
import { CartProvider } from "@/context/useCart";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kikibeauty.in"),
  title: {
    default: "Kiki Beauty | Premium Indian Beauty Brand",
    template: "%s | Kiki Beauty",
  },
  description:
    "Discover Kiki Beauty - Premium Indian makeup brand celebrating every skin tone. Shop foundations, concealers, and more designed for Indian skin.",
  keywords: [
    "Indian makeup",
    "foundation",
    "concealer",
    "beauty products",
    "Indian beauty brand",
    "makeup for Indian skin",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kikibeauty.in",
    siteName: "Kiki Beauty",
    title: "Kiki Beauty | Premium Indian Beauty Brand",
    description:
      "Premium Indian makeup brand celebrating every skin tone. Shop foundations, concealers, and more designed for Indian skin.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kiki Beauty Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiki Beauty | Premium Indian Beauty Brand",
    description: "Premium Indian makeup brand celebrating every skin tone",
    images: ["/assets/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans`}>
        <CartProvider>
          <ShadeProvider>
            <>
              <ScrollToTop />
              <div className="flex flex-col min-h-screen bg-white">
                <Navbar />
                <main className="flex-grow w-full">{children}</main>
                <Footer />
              </div>
            </>
          </ShadeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
