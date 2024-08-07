import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const sans = DM_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Dreamerblog",
  description: "Generated by Dreamerwebdev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <Navbar/>
        <main className="md:min-h-[75vh] mt-[6rem]">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
