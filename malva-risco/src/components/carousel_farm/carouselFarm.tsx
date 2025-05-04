'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './carouselFarm.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CarouselFarm() {
	const [images, setImages] = useState<string[]>([]);

	useEffect(() => {
		if (images.length > 0) return; // Avoid fetching if images are already loaded
		fetch('/api/farmimgs')
			.then(res => res.json())
			.then(setImages)
			.catch(err => console.error('Error loading images:', err));
	}, [images]);

	if (images.length === 0) return <p>Cargando imágenes...</p>;

	return (

		<Carousel autoPlay infiniteLoop showThumbs={false} className={styles.carouselFarm}>
			{images.map((img, i) => (
				<div className={styles.carouselFarm}
					key={i}
				>
					<Image
						src={`/farmsfarm-webp/${img}`}
						alt={`Imagen ${i + 1}`}
						width={800}
						height={600}
					//loading="lazy"
					/>
				</div>
			))}
		</Carousel>
	);
}
