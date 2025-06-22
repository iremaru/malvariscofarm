'use client';

import React from 'react'
import style from './page.module.scss'
import { ProductCard } from '@/components/store/productCard/productCard'
import { useAvailableBatches } from '@/hook/useAvailableBatches';

export default function Page() {
	const { batches, loading } = useAvailableBatches();

	if (loading) return <p>Cargando productos disponibles...</p>;

	return (
		<div className={style.page__store}>
			<h1 className={style.page__title}>Tienda</h1>
			<div className={style.productGrid}>
				{batches.map((batch, index) => (
					<ProductCard
						key={`product_card_${index}`}
						batch={batch}
					/>
				))}
			</div>
		</div>
	)
}
