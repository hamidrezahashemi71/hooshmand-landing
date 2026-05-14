import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { iranSans } from "@/lib/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "پرشین عصر هوشمند",
  description: "Landing Page of Persian group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${iranSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-primary bg-white-02">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
