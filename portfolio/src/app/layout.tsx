import "@/styles/globals.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/h.png",
  },
  title: "Ebi-Tech | Frontend Developer & Mobile App Designer",
  description: "Portfolio showcasing Software development skills and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
