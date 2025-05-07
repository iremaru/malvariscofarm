import { Unit } from "./unit.type";

export type Price = {
	pvp: number;
	pvm: number;
	currency: '€';
	unit: Unit;
}
