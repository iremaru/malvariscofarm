'use client'
import Image from "next/image";
import styles from "./page.module.scss";
import CarouselFarm from "@/components/carousel_farm/carouselFarm";
import { ProductShowroom } from "@/components/productShowroom/productShowroom";

export default function Home() {

	return (
		<div className={styles.page}>
			<section id="inicio" className={styles.heroImg}>
				<div className={styles.overlay}>
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cultivamos salud en Güímar, Tenerife</h1>
					<p className="text-xl text-white mb-8">Productos ecológicos cultivados con amor y respeto por la tierra</p>
					<div className={styles.ctaGroup}>
						<a href="#productos" className={`${styles.button} ${styles.primary}`}>🌿 Ver productos</a>
						<a href="https://www.instagram.com/finca_malva_risco" target="_blank" className={`${styles.button} ${styles.secondary}`}>📸 Ver Instagram</a>
					</div>
				</div>
				<CarouselFarm />
			</section>

			<section id="finca" className={styles.section__finca}>
				<h2 className={styles.brandingTitle}>La Finca</h2>
				<div className={styles.story}>
					<Image
						src="/farmsfarm-webp/35.webp"
						alt="Finca Malva-Risco"
						width={500}
						height={300}
					/>
					<div>
						<h3>Nuestra historia</h3>
						<p>Ubicada en el fértil valle de Güímar, Tenerife, la Finca Malva-Risco lleva más de {new Date().getFullYear() - 2020} años dedicada a la agricultura ecológica, cultivando productos de máxima calidad con técnicas respetuosas con el medio ambiente.</p>
						<p>Nuestra filosofía se basa en tres pilares fundamentales: sostenibilidad, calidad y amor por la tierra.</p>
						<div className={styles.text_emphasize}>
							<p>Cada producto que sale de nuestra finca lleva consigo el sabor auténtico de Canarias.</p>
						</div>
					</div>
				</div>
				<div>
					<h3>Ubicación</h3>
					<div className="bg-gray-100 p-4 rounded-lg">
						<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3178.384437751928!2d-16.3938611!3d28.321666699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDE5JzE4LjAiTiAxNsKwMjMnMzcuOSJX!5e1!3m2!1ses!2ses!4v1746382808426!5m2!1ses!2ses"
							width="100%"
							height="400"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							className="rounded-lg shadow"></iframe>
					</div>
				</div>
			</section>

			<section id="productos" className={styles.section__products}>
				<h2 className={styles.brandingTitle}>Nuestros Productos</h2>
				<ProductShowroom />
			</section>


			{/* 
			<section id="galeria" className="py-20 bg-white">
				<h2 className={styles.brandingTitle}>Desde Instagram</h2>
				<InstagramShowroom />
			</section>
			<section id="contacto" className="py-20 bg-green-800 text-white">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12">Hablemos directamente</h2>

					<div className="flex flex-col md:flex-row">
						<div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
							<h3 className="text-2xl font-semibold mb-6">Contacta con nosotros</h3>
							<p className="mb-6">Estamos encantados de atenderte personalmente. Puedes contactarnos por WhatsApp para una respuesta rápida o visitarnos en nuestra finca.</p>

							<div className="bg-green-700 bg-opacity-50 p-6 rounded-lg mb-8">
								<h4 className="text-xl font-semibold mb-4"><i className="fas fa-map-marker-alt mr-2"></i> Visítanos</h4>
								<p className="mb-2">Finca Malva-Risco</p>
								<p>Camino Los Risco, 123</p>
								<p>38500 Güímar, Tenerife</p>
							</div>

							<a href="https://wa.me/34600000000?text=Hola%20Finca%20Malva-Risco,%20me%20gustaría%20obtener%20más%20información"
								className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 mb-6">
								<i className="fab fa-whatsapp mr-2 text-xl"></i> Escríbenos por WhatsApp
							</a>

							<div className="flex space-x-4 mt-6">
								<a href="https://instagram.com" target="_blank" className="text-white hover:text-green-200 text-2xl">
									<i className="fab fa-instagram"></i>
								</a>
								<a href="https://facebook.com" target="_blank" className="text-white hover:text-green-200 text-2xl">
									<i className="fab fa-facebook"></i>
								</a>
							</div>
						</div>

						<div className="md:w-1/2">
							<h3 className="text-2xl font-semibold mb-6">Formulario de contacto</h3>
							<form className="space-y-4">
								<div>
									<label for="name" className="block mb-1">Nombre</label>
									<input type="text" id="name" className="w-full px-4 py-2 rounded-lg bg-green-700 bg-opacity-50 border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
								</div>
								<div>
									<label for="email" className="block mb-1">Correo electrónico</label>
									<input type="email" id="email" className="w-full px-4 py-2 rounded-lg bg-green-700 bg-opacity-50 border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
								</div>
								<div>
									<label for="message" className="block mb-1">Mensaje</label>
									<textarea id="message" rows="4" className="w-full px-4 py-2 rounded-lg bg-green-700 bg-opacity-50 border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
								</div>
								<button type="submit" className="w-full bg-white hover:bg-gray-100 text-green-800 py-3 px-6 rounded-full font-medium transition duration-300">
									Enviar mensaje
								</button>
							</form>
						</div>
					</div>
				</div>
			</section> */}
		</div>
	);
}
