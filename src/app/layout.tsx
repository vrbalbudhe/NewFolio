import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
