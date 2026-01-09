import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/../components/layout/Navbar";
import Footer from "@/../components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tripsiy | Travel & Tours",
  description: "Your trusted travel partner for unforgettable experiences.",
  icons: {
    icon: "/logo.png",
  },
 
  openGraph: {
    title: "Tripsiy | Travel & Tours",
    description: "Your trusted travel partner for unforgettable experiences.",
    images: [
      {
        url: "/logo.png", 
        width: 800,      
        height: 600,      
        alt: "Tripsiy Logo",
      },
    ],
    type: "website",
  },
  // -------------------------------------------------------
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}