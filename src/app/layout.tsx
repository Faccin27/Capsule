import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CapsuleLiving - Future of Modular Housing",
  description:
    "Revolutionary modular housing capsules designed for the modern nomad. Sustainable, luxurious, and perfectly integrated with nature.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook / Discord */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CapsuleLiving - Future of Modular Housing" />
        <meta
          property="og:description"
          content="Revolutionary modular housing capsules designed for the modern nomad. Sustainable, luxurious, and perfectly integrated with nature."
        />
        <meta
          property="og:image"
          content="/images/activities-1.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CapsuleLiving - Future of Modular Housing" />
        <meta
          name="twitter:description"
          content="Revolutionary modular housing capsules designed for the modern nomad. Sustainable, luxurious, and perfectly integrated with nature."
        />
        <meta
          name="twitter:image"
          content="/images/activities-1.png"
        />

        <link rel="icon" href="/images/cap2.png" />
      </Head>
      <body className={inter.className}>
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
