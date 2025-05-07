import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nunito } from "next/font/google";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false
import "./globals.scss";
import { BtnWhatsapp } from "@/components/btn_whatsapp/btnWhatsapp";
import Image from "next/image";
import { Navbar } from "@/components/navbar/navbar";

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="es">
			<body className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable}`}>
				<BtnWhatsapp />
				<Navbar />
				{children}
				<footer>
					<Image
						src="/certificates/Contraetiqueta-2019.jpg"
						alt="Certificado de agricultura ecológica"
						className="ecolabel"
						width={50}
						height={75} />
					<div>
						<p>&copy; <span id="year">{new Date().getFullYear()}</span> Finca Malva-Risco. Todos los derechos reservados.</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
