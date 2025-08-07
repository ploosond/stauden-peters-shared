import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

import GoTop from "@/components/GoTop";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Stauden Peters",
  description: "Your perennial and grass producer from the Lower Rhine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased`}>
        <Toaster />
        {/* <TopSection /> */}
        <Navbar />
        {children}
        <GoTop />
        <Footer />
      </body>
    </html>
  );
}
