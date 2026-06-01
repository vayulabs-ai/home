import type { Metadata } from "next";
import { Geist_Mono, Inter, DM_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next"
import { cn } from "@/lib/utils";

import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Vayu Labs",
  description:
    "We build scalable systems, AI in the core for teams that need to ship.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700", "800"],
});

const DMMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={cn(
          inter.variable,
          geistMono.variable,
          DMMono.variable,
          `bg-background relative font-sans antialiased`,
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
