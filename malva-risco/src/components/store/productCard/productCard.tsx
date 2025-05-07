'use client'
import React, { ChangeEvent, useState, FC } from 'react';
import Image from 'next/image';
import style from './productCard.module.scss';
import { Batch } from '@/model/store/batch.type';


interface ProductCardProps {
	batch: Batch;
}

export const ProductCard: FC<ProductCardProps> = ({ batch }
) => {
	const { product, prices } = batch;
	const { pvp, currency, unit } = prices?.[0];
	const [productCount, setProductCount] = useState(1)
	const handleProductCountChange = (changeEvent: ChangeEvent) => {
		setProductCount((Number)((changeEvent.target as HTMLInputElement).value))
	}

	const handleAddItemToCart = () => {
		const item = {
			item: product,
			count: productCount,
		}
		console.log(item);
	}

	return (
		<div className={style.productCard}>
			<Image
				src={product.img}
				alt={product.sale_name}
				className={style.productImage}
				width={300}
				height={300} />
			<div>

				<div className={style.productInfo}>
					<h3 className={style.productName}>{product.sale_name}</h3>
					<p>{product.description}</p>
					<p className={style.productPrice}>{pvp}{currency}/{unit.shortName}</p>
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
