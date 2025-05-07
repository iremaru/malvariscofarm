import { Unit } from "./unit";

export type Price = {
	pvp: number;
	pvm: number;
	currency: '€';
	unit: Unit;
}
