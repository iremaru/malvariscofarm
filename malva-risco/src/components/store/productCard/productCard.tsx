import React from 'react';
import Image from 'next/image';
import style from './productCard.module.scss';

interface ProductModel {
	productName: string,
	productPrice: string,
	productImage: string;
}

export const ProductCard = ({
	productName,
	productPrice,
	productImage
}: ProductModel
) => {

	return (
		<div className={style.productCard}>
			<Image
				src={productImage}
				alt={productName}
				className={style.productImage}
				width={300}
				height={300} />
			<h3 className={style.productName}>{productName}</h3>
			<p className={style.productPrice}>{productPrice}</p>
		</div>
	);
};
