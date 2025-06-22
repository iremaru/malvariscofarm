"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import CarouselFarm from "@/components/carousel_farm/carouselFarm";
import { ProductShowroom } from "@/components/productShowroom/productShowroom";

export default function Home() {
  return (
    <div className={styles.page}>
      <section id='inicio' className={styles.heroImg}>
        <div className={styles.overlay}>
          <h1>Cultivamos salud en Güímar, Tenerife</h1>
          <p>
            Productos ecológicos cultivados con amor y respeto por la tierra
          </p>
          <div className={styles.ctaGroup}>
            <a
              href='#productos'
              className={`${styles.button} ${styles.primary}`}
            >
              🌿 Ver productos
            </a>
            <a
              href='https://www.instagram.com/finca_malva_risco'
              target='_blank'
              className={`${styles.button} ${styles.secondary}`}
            >
              📸 Ver Instagram
            </a>
          </div>
        </div>
        <CarouselFarm />
      </section>

      <section id='finca' className={styles.section__finca}>
        <h2 className={styles.brandingTitle}>La Finca</h2>
        <div className={styles.story}>
          <Image
            src='/farmsfarm-webp/35.webp'
            alt='Finca Malva-Risco'
            width={500}
            height={300}
          />
          <div>
            <h3>Nuestra historia</h3>
            <p>
              Ubicada en el fértil valle de Güímar, Tenerife, la Finca
              Malva-Risco lleva más de {new Date().getFullYear() - 2020} años
              dedicada a la agricultura ecológica, cultivando productos de
              máxima calidad con técnicas respetuosas con el medio ambiente.
            </p>
            <p>
              Nuestra filosofía se basa en tres pilares fundamentales:
              sostenibilidad, calidad y amor por la tierra.
            </p>
            <div className={styles.text_emphasize}>
              <p>
                Cada producto que sale de nuestra finca lleva consigo el sabor
                auténtico de Canarias.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3>Ubicación</h3>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3178.384437751928!2d-16.3938611!3d28.321666699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDE5JzE4LjAiTiAxNsKwMjMnMzcuOSJX!5e1!3m2!1ses!2ses!4v1746382808426!5m2!1ses!2ses'
              width='100%'
              height='400'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              className='rounded-lg shadow'
            ></iframe>
          </div>
        </div>
      </section>

      <section id='productos' className={styles.section__products}>
        <h2 className={styles.brandingTitle}>Nuestros Productos</h2>
        <ProductShowroom />
      </section>
    </div>
  );
}
