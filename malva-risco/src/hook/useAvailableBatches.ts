/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { Batch } from '@/model/store/batch.type';
import { BatchDao, BatchDataMapper, PriceDao } from '@/model/store/batch.dao';

export function useAvailableBatches() {
	const [batches, setBatches] = useState<Batch[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const handleError = (msg: string) => {
		setError(msg);
		setBatches([]);
		setLoading(false);
	}

	useEffect(() => {
		const fetchBatches = async () => {
			setLoading(true);
			const { data: batchesData, error: bachError } = await supabase
				.from('batch')
				.select(`
					id,
					production_date,
					expiration_date,
					weight_per_unit_min,
					weight_per_unit_max,
					weight_total,
					units_total,
					product_id,
					product:product (
						id,
						sale_name,
						description,
						img_url
						)
				`)
				.eq('is_available', true);
			const batchDaos: BatchDao[] = Array.isArray(batchesData)
				? (batchesData as unknown as BatchDao[])
				: [];
			const productIds = batchDaos
				.map((batch: any) => batch.product_id)
				.filter((id) => id !== undefined);

			const { data: priceData, error: priceError } = await supabase
				.from('price')
				.select(`
					product_id,
					pvp_eur,
					unit:unit (
					short
					)
				`)
				.in('product_id', productIds);


			if (bachError || priceError) {
				console.error(bachError || priceError);
				handleError('Error fetching batches');
				return;
			}

			if (!batchesData) {
				handleError('Error not batches availables');
				return;
			}

			if (!priceData) {
				handleError('Error not prices availables');
				return;
			}

			const priceDaos: PriceDao[] = Array.isArray(priceData)
				? (priceData as unknown as PriceDao[])
				: [];

			setBatches(BatchDataMapper(batchDaos, priceDaos));
			setError(null);
			setLoading(false);
		};

		fetchBatches();
	}, []);

	return { batches, loading, error };
}
