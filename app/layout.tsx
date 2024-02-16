import type { Metadata } from "next";
import { Figtree, Sometype_Mono } from "next/font/google";
import { AOSInit } from "../components/aos";
import PrelineScript from "@/components/prelineScript";
import "./globals.css";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Pop-Up Hanami",
  description: "Presented by UBC Anime Club",
};

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const sometype = Sometype_Mono({
  subsets: ["latin"],
  variable: "--font-sometype",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <AOSInit />
      <body>
        <main className={`${figtree.variable} ${sometype.variable}`}>
          <NavBar />
          {children}
          <Footer />
        </main>
        <PrelineScript />
      </body>
    </html>
  );
}
