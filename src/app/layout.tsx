import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Konfigurasi font Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sate Ayam Ponorogo Mas Yudi",
  description: "Website Resmi Sate Ayam Ponorogo Mas Yudi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#FFFBF5] text-[#2A1508]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}