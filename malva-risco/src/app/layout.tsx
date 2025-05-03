import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Malva Risco",
	description: "Finca Ecológica Malva Risco",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="es">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<nav className="navbar">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/store">Store</Link>
						</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
