import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nunito } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import { BtnWhatsapp } from "@/app/home/components/btn_whatsapp/btnWhatsapp";
import { Navbar } from "@/app/home/components/navbar/navbar";
import "@/app/globals.scss";

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Malva Risco",
  description: "Finca Ecológica Malva Risco",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
