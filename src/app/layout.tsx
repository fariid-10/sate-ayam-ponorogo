import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Konfigurasi font Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sate Ayam Ponorogo Mas Yudi | Cita Rasa Autentik Jawa Timur",
  description:
    "Sate Ayam Ponorogo Mas Yudi dengan irisan daging pipih memanjang yang empuk, bumbu rempah tradisi meresap, dan bumbu kacang sangrai gurih. Melayani dine-in di Pacet, pick-up Mojosari, besek oleh-oleh, hingga catering hajatan.",
  keywords: [
    "Sate Ayam Ponorogo",
    "Sate Mas Yudi",
    "Sate Pacet Mojokerto",
    "Sate Mojosari",
    "Sate Ayam Enak Pacet",
    "Kuliner Pacet",
    "Sate Besek Bambu",
    "Catering Sate Ponorogo",
  ],
  openGraph: {
    title: "Sate Ayam Ponorogo Mas Yudi",
    description:
      "Daging diiris pipih memanjang khas Ponorogo, sangat empuk dan meresap sempurna dengan bumbu kacang lembut gurih.",
    url: "https://sateayamponorogomasyudi.com",
    siteName: "Sate Ayam Ponorogo Mas Yudi",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sate Ayam Ponorogo Mas Yudi",
    image: "https://sateayamponorogomasyudi.com/logo.png",
    telephone: "+6285850125627",
    servesCuisine: "Indonesian",
    priceRange: "$$",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Kawasan Wisata Pacet",
        addressLocality: "Mojokerto",
        addressRegion: "Jawa Timur",
        addressCountry: "ID",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Perum. Grand Mansion B4 No.50 Kalipuro, Pungging",
        addressLocality: "Mojosari, Mojokerto",
        addressRegion: "Jawa Timur",
        addressCountry: "ID",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08.00",
        closes: "15.00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "17.00",
        closes: "22.00",
      },
    ],
  };

  return (
    <html lang="id" className={`${inter.className} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-[#FFFBF5] text-[#2A1508] selection:bg-amber-200 selection:text-amber-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
