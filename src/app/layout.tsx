import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Footer from "../components/common/Footer";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Baa Baa!",
  description: "A blank canvas created.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${comfortaa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
       <Footer /> 
      </body>
    </html>
  );
}
