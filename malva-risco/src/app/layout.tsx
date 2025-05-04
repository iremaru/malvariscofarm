import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nunito } from "next/font/google";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false
import "./globals.scss";
import { BtnWhatsapp } from "@/components/btn_whatsapp/btnWhatsapp";
import Image from "next/image";

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
				{/* <nav className="navbar">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/store">Store</Link>
						</li>
					</ul>
				</nav> */}
				{children}
				<footer className="bg-green-900 text-white py-12">
					<div className="container mx-auto px-6">
						<div className="flex flex-col md:flex-row justify-between">
							<div className="mb-8 md:mb-0">
								<div className="flex items-center mb-4">
									<Image src="/logo.svg"
										alt="Logo Malva-Risco"
										className="h-8 w-8 mr-2"
										width={32}
										height={32}
									/>
									<span className="text-xl font-bold">Finca Malva-Risco</span>
								</div>
								<p className="mb-2">Agricultura ecológica en Tenerife</p>
								<p>Güímar, Santa Cruz de Tenerife</p>
							</div>

							<div className="mb-8 md:mb-0">
								<h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
								<ul className="space-y-2">
									<li><a href="#inicio" className="hover:text-green-300 transition duration-300">Inicio</a></li>
									<li><a href="#finca" className="hover:text-green-300 transition duration-300">La Finca</a></li>
									<li><a href="#productos" className="hover:text-green-300 transition duration-300">Productos</a></li>
									<li><a href="#contacto" className="hover:text-green-300 transition duration-300">Contacto</a></li>
								</ul>
							</div>

							<div>
								<h3 className="text-lg font-semibold mb-4">Legal</h3>
								<ul className="space-y-2">
									<li><a href="#" className="hover:text-green-300 transition duration-300">Política de privacidad</a></li>
									<li><a href="#" className="hover:text-green-300 transition duration-300">Aviso legal</a></li>
									<li><a href="#" className="hover:text-green-300 transition duration-300">Política de cookies</a></li>
								</ul>
							</div>
						</div>

						<div className="border-t border-green-800 mt-12 pt-8 text-center text-sm text-green-300">
							<p>&copy; <span id="year"></span> Finca Malva-Risco. Todos los derechos reservados.</p>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
