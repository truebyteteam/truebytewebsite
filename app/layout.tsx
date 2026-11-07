
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

import AOSInit from "../components/AOSInit";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";
import FestivalBanner from "../components/FestivalBanner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "True Byte",
  description: "Healthy Homemade Snacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable}`}>
        <CartProvider>
          <Toaster position="top-right" />
          <AOSInit />

          {/* Festival Celebration */}
          <div className="mb-1.5">
            <FestivalBanner />
          </div>

          {/* Website Pages */}
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
