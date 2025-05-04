import Image from 'next/image'
import React from 'react'
import style from './productShowroom.module.scss'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { BtnWhatsapp } from '../btn_whatsapp/btnWhatsapp'

export const ProductShowroom = () => {
	const fakeData = [
		{
			img: '/farmsfarm-webp/42.webp',
			productName: 'Lechugas Ecológicas',
			productTitle: 'Lechugas Ecológicas',
			productDescription: 'Variedades: Batavia, Romana, Hoja de Roble',
			disponibility: 'Todo el año',
			wpMsg: 'Me interesan vuestras lechugas ecológicas',
			cta: 'Consultar disponibilidad',
		},
		{
			img: '/farmsfarm-webp/55.webp',
			productName: 'Mermeladas Artesanales',
			productTitle: 'Mermeladas Artesanales',
			productDescription: 'Sabores: Plátano, Mango, Frutos del Bosque',
			disponibility: 'Consultar disponibilidad',
			wpMsg: 'Me interesan vuestras mermeladas artesanales',
			cta: 'Consultar sabores',
		},
		{
			img: '/farmsfarm-webp/55.webp',
			productName: 'Conservas Naturales',
			productTitle: 'Conservas Naturales',
			productDescription: 'Tomate, Pimientos, Berenjenas',
			disponibility: 'Verano/Otoño',
			wpMsg: 'Me interesan vuestras conservas naturales',
			cta: 'pedir información',
		}
	]

	const productCards =
		(img: string | StaticImport,
			productName: string,
			productTitle: string,
			productDescription: string,
			disponibility: string,
			wpMsg: string,
			cta: string
		) => <div className={style.product_card}>
				<Image
					src={img}
					alt={productName}
					width={500}
					height={300}
					onError={(e) => {
						e.currentTarget.className = style.error_img;
						//e.currentTarget.src = '/'
						e.currentTarget.alt = 'Imagen no disponible';
					}}
				/>
				<div>
					<h3>{productTitle}</h3>
					<p className={style.product_description}>{productDescription}</p>
					<p className={style.disponibility}>
						<span className={style.disponibility_title}>Disponible</span>
						<span className={style.disponibility_value}>{disponibility}</span>
					</p>
					<BtnWhatsapp
						msg={wpMsg}
						isFloating={false}
						cta={cta}
					/>
				</div>
			</div>
	return (
		<div className={style.productShowroom}>
			{fakeData
				.map((product) =>
					productCards(
						product.img,
						product.productName,
						product.productTitle,
						product.productDescription,
						product.disponibility,
						product.wpMsg,
						product.cta,
					))}
		</div>
	)
}
