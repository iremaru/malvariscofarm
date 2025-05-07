import React from 'react'
import style from './page.module.scss'
import { ProductCard } from '@/components/store/productCard/productCard'

export default function page() {

	const fakeData = [
		{
			ProductName: "Tomate",
			ProductDescription: "Rojo pasión, no es nada vergonzón",
			ProductPrice: "2'5€/kg",
			ProductImage: "/products/tomate.webp"
		},
		{
			ProductName: "Col",
			ProductDescription: "No saca sus cuernos al sol, pero mola un montón",
			ProductPrice: "0'90€/ud",
			ProductImage: "/products/col.webp"
		},
		{
			ProductName: "Berenjena",
			ProductDescription: "Una verdura super poderosa y ultra deliciosa",
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
						productDescription={product.ProductDescription}
						productPrice={product.ProductPrice}
						productImage={product.ProductImage}
					/>
				))}
			</div>
		</div>
	)
}
