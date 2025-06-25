
export enum ActionType {
	ADD,
	UPDATE,
	REMOVE,
}

export interface IAdminUser {
	role: string;
	email: string;
	isAnon: boolean;
}
export const BLANK_USER: IAdminUser = {
	role: "",
	email: "",
	isAnon: true,
};

export type AdminContextAction =
	| { type: ActionType.ADD; payload: IAdminUser }
	| { type: ActionType.UPDATE; payload: IAdminUser }
	| { type: ActionType.REMOVE; payload: null };
