import type { Metadata } from "next";
import { Ubuntu, Abril_Fatface } from "next/font/google";
import "./index.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu", 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "700"],
});

const abrilFatface = Abril_Fatface({
  variable: "--font-abril-fatface",  
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Zdeněk Barth",
  description: "Zdeněk Barth's personal website",
  keywords: "programování, web development, react, next.js",
  authors: [{ name: "Zdeněk Barth" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${abrilFatface.variable} antialiased`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
