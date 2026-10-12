import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Algorank — AI SEO Agency London | Rank in ChatGPT, Google AI & Perplexity",
  description:
    "Algorank is a London-based AI SEO agency helping UK brands get cited in ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews. Weekly visibility reports, technical SEO and content that gets recommended.",
  keywords: [
    "AI SEO agency London",
    "GEO agency UK",
    "ChatGPT SEO",
    "generative engine optimisation",
    "AI search visibility UK",
    "Google AI Overviews SEO",
  ],
  metadataBase: new URL("https://algorank.co.uk"),
  openGraph: {
    title: "Algorank — AI SEO Agency for UK Brands",
    description:
      "Know when ChatGPT, Perplexity and Claude recommend your brand. Done-for-you AI SEO from London.",
    type: "website",
    locale: "en_GB",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
