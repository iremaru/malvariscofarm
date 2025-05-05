'use client';

import React from 'react'
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./navbar.module.scss";
import Image from 'next/image';
import Link from "next/link";

export const Navbar = () => {

	const handleMenuToggle = () => {
		setMobileMenuIsOpen((prev) => !prev);
	};

	const navLinks = <>
		<Link href="/#inicio" className={styles.link}>Inicio</Link>
		<Link href="/#finca" className={styles.link}>La Finca</Link>
		<Link href="/#productos" className={styles.link}>Productos</Link>
		<Link href="/store" className={styles.link}>Store</Link>
	</>;
	const mobileMenu = (
		<div className={styles.mobile_menu}
			onClick={handleMenuToggle}>
			{navLinks}
		</div>
	)
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div>
					<Image src="/logo.svg" alt="Logo Malva-Risco" className={styles.logo_malva} width={50} height={50} />
					<p className={styles.title}>Finca Malva-Risco</p>
				</div>
				{isMobile
					? <button className={styles.menu_btn}
						onClick={handleMenuToggle} id="mobile-menu-button">
						<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					: (<nav>
						{navLinks}
					</nav>)
				}
			</div>
			{(isMobile && mobileMenuIsOpen) && mobileMenu}
		</header>
	)
}
