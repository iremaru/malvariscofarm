import { Batch } from "./batch.type";
import { Price } from "./price.type";

export type BatchDao = {
	id: string;
	product_id: string;
	production_date: string;
	expiration_date: string;
	weight_per_unit_min: number;
	weight_per_unit_max: number;
	weight_total: number;
	units_total: number;
	product: {
		id: string,
		sale_name: string,
		description: string,
		img_url: string,
	}
}

export type PriceDao = {
	product_id: string;
	pvp_eur: number;
	pvm_eur: number;
	unit: {
		id: string,
		name: string,
		short: string,
	}
}

export function BatchDataMapper(
	batchDaos: BatchDao[],
	priceDaos: PriceDao[]): Batch[] {

	const batches: Batch[] = batchDaos.map((batch) => {
		const prices: Price[] = priceDaos
			.filter(price => price.product_id === batch.product_id)
			.map(price => ({
				pvp: price.pvp_eur,
				pvm: price.pvm_eur,
				currency: '€',
				unit: {
					id: price.unit.id,
					shortName: price.unit.short,
					longName: price.unit.name,
				}
			}))
			;
		return {
			id: batch.id,
			harvest_date: batch.production_date,
			expiration_date: batch.expiration_date,
			weigth: {
				min: batch.weight_per_unit_min,
				max: batch.weight_per_unit_max,
			},
			stock: {
				kg: batch.weight_total,
				units: batch.units_total,
			},
			product: {
				id: batch.product.id,
				sale_name: batch.product.sale_name,
				description: batch.product.description,
				img: batch.product.img_url,
			},
			prices: prices || [],
		}
	});

	return batches;
}