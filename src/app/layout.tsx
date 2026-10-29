import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

import { ChromeProvider } from "@/components/layout/ChromeProvider";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
  fallback: ["Trebuchet MS", "Segoe UI", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Helvetica Neue", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "The Mickbess School - Appolonia | Welcoming every child",
    template: "%s | The Mickbess School - Appolonia",
  },
  description:
    "The Mickbess School - Appolonia is a welcoming school community where every child is known, supported, and challenged to grow.",
  openGraph: {
    type: "website",
    siteName: "The Mickbess School - Appolonia",
    title: "The Mickbess School - Appolonia | Welcoming every child",
    description:
      "The Mickbess School - Appolonia is a welcoming school community where every child is known, supported, and challenged to grow.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b2239",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="top" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/* Without JS the reveal observer never runs, so data-revealed stays
            "false" and every section would be invisible. Show everything. */}
        <noscript>
          <style>{`
            [data-reveal], [data-stagger] > * {
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
              clip-path: none !important;
            }
            [data-reveal="line"] > * { transform: none !important; }
            .img-wipe::after { display: none !important; }
            .rule-above::before { transform: scaleX(1) !important; }
          `}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[99] focus:rounded-full focus:bg-ink focus:px-6 focus:py-3 focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        <ChromeProvider>
          <SiteChrome />
          <main id="main">{children}</main>
          <Footer />
        </ChromeProvider>
      </body>
    </html>
  );
}
