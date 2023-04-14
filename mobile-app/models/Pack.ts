import { Translation } from "./Translation";

export interface Pack {
	id: string,
	name: string,
	order: number,
	originalLanguage: string,
	translationLanguage: string,
	translations: Translation[]
}