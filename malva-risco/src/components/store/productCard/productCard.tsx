'use client'
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import style from './productCard.module.scss';

interface ProductModel {
	productName: string,
	productDescription: string,
	productPrice: string,
	productImage: string;
}

export const ProductCard = ({
	productName,
	productDescription,
	productPrice,
	productImage
}: ProductModel
) => {
	const [productCount, setProductCount] = useState(1)
	const handleProductCountChange = (changeEvent: ChangeEvent) => {
		setProductCount((Number)((changeEvent.target as HTMLInputElement).value))
	}

	const handleAddItemToCart = () => {
		const item = {
			item: productName,
			count: productCount,
		}
		console.log(item);
	}

	return (
		<div className={style.productCard}>
			<Image
				src={productImage}
				alt={productName}
				className={style.productImage}
				width={300}
				height={300} />
			<div>

				<div className={style.productInfo}>
					<h3 className={style.productName}>{productName}</h3>
					<p>{productDescription}</p>
					<p className={style.productPrice}>{productPrice}</p>

				</div>
				<div className={style.productActions}>
					<div className={style.stepper}>
						<p className={style.button} onClick={handleAddItemToCart}>-</p>
						<input
							type='number'
							min={1}
							max={9999}
							defaultValue={1}
							onChange={handleProductCountChange}
						/>
						<p className={style.button} onClick={handleAddItemToCart}>+</p>
					</div>
					<button onClick={handleAddItemToCart}>Añadir</button>
				</div>
			</div>
		</div>
	);
};
