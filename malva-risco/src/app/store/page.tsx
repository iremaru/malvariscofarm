import React from 'react'
import style from './page.module.scss'
import { ProductCard } from '@/components/store/productCard/productCard'

export default function page() {

	const fakeData = [
		{
			ProductName: "Tomate",
			ProductPrice: "2'5€/kg",
			ProductImage: "/products/tomate.webp"
		},
		{
			ProductName: "Col",
			ProductPrice: "0'90€/ud",
			ProductImage: "/products/col.webp"
		},
		{
			ProductName: "Berenjena",
			ProductPrice: "0'53€/ud",
			ProductImage: "/products/berenjena.webp"
		}
	]

	return (
		<div className={style.page__store}>
			<h1 className={style.page__title}>Tienda</h1>
			<div className={style.productGrid}>
				{fakeData.map((product, index) => (
					<ProductCard
						key={`product_card_${index}`}
						productName={product.ProductName}
						productPrice={product.ProductPrice}
						productImage={product.ProductImage}
					/>
				))}
			</div>
		</div>
	)
}
