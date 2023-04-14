import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pack} from '../models/Pack';
import { log } from '../businessLogic/Logger';
import uuid from 'react-native-uuid';

const packsKey = "packs";
const selectedPackIdKey = "selectedPack";

export const getPackNames = async (): Promise<string[]> => {
	try {
		const packs = await getPacks();

		if (packs !== null)
		{
			return packs.map(pack => pack.name);
		}
	} catch (e) {
		log("error getPackNames", e);
	}

	return [];
}

export const getPacks = async (): Promise<Pack[]> => {
	try {
		const value = await AsyncStorage.getItem(packsKey);

		if (value !== null) {
			const packs = JSON.parse(value) as Pack[];

			return packs;
		}

		return [];
	} catch (e) {
		log("error getPackNames", e);
		return [];
	}
}

export const setPacks = async (packs: Pack[]) => {
	try {
		await AsyncStorage.setItem(packsKey, JSON.stringify(packs));
	} catch (e) {
		log("error setPacks", e);
	}
}

export const upsertPack = async (pack: Pack) => {
	if(!pack.id)
	{
		await insertPack(pack);
	}
	else
	{
		await updatePack(pack);
	}
}

const insertPack = async (pack: Pack) => {
	pack.id = uuid.v4().toString();

	const packs = await getPacks();
	packs.push(pack);

	setPacks(packs);
}

const updatePack = async (pack: Pack) => {
	const packs = await getPacks();
	
	let packFound = false;
	for(let i = 0; i<packs.length; i++)
	{
		if(packs[i].id == pack.id)
		{
			packs[i] = pack;
			packFound = true;
		}
	}

	if(!packFound)
	{
		log("Error updating pack. Pack wasn't found.", pack);
	}

	setPacks(packs);
}

export const getSelectedPackName = async (): Promise<string> => {
	try {
		const value = await AsyncStorage.getItem(selectedPackIdKey);

		const packs = await getPacks();

		const neededPack = packs.find(pack => pack.id == value);
		if(!neededPack)
		{
			log("selected pack wasn't found");
		}
		else
		{
			return neededPack.name;
		}
	} catch (e) {
		log("error getSelectedPackName", e);
	}

	return "";
}

export const setSelectedPack = async (pack: Pack) => {
	try {
		await AsyncStorage.setItem(selectedPackIdKey, pack.id);
	} catch (e) {
		log("error setSelectedPack", e);
	}
}