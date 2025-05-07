import { Price } from "./price.type";
import { Product } from "./product.type";

export type Batch = {
	id: string;
	product: Product;
	harvest_date: string;
	expiration_date: string | null;
	stock: { kg: number, units: number };
	weigth: { min: number, max: number };
	prices: Price[];
};