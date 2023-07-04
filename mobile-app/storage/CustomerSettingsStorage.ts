import AsyncStorage from '@react-native-async-storage/async-storage';
import { log } from '../businessLogic/Logger';
import uuid from 'react-native-uuid';
import { CustomerSettings } from '../models/CustomerSettings';
import { getPacks } from './PacksStorage';
import { Pack } from '../models/Pack';

const customerSettingsKey = "customerSettings";

export const getCustomerSettings = async (): Promise<CustomerSettings | null> =>
{
	try {
		const value = await AsyncStorage.getItem(customerSettingsKey);

		if (value !== null) {
			const settings = JSON.parse(value) as CustomerSettings;

			return settings;
		}

	} catch (e) {
		log("error getCustomerSettings", e);
	}

	return null;
}

export const upsertCustomerSettings = async (settings: CustomerSettings) => {
	if(!settings.id)
	{
		await insertCustomerSettings(settings);
	}
	else
	{
		await updateCustomerSettings(settings);
	}
}

const insertCustomerSettings = async (settings: CustomerSettings) => {
	var customerId = uuid.v4().toString();

	if(settings.id)
	{
		log("Customer settings id is not null");
		customerId = settings.id;
	}

	const newCustomerSettings = {
		id: customerId,
		defaultPackForAddingId: settings.defaultPackForAddingId,
		nativeLanguage: settings.nativeLanguage
	} as CustomerSettings;

	await AsyncStorage.setItem(customerSettingsKey, JSON.stringify(newCustomerSettings));
}

const updateCustomerSettings = async (settings: CustomerSettings) => {
	await AsyncStorage.setItem(customerSettingsKey, JSON.stringify(settings));
}

export const getDefaultPack = async (): Promise<Pack | null> => {
	try {
		const customerSettings = await getCustomerSettings();

		const packs = await getPacks();

		if(!customerSettings || !customerSettings.defaultPackForAddingId || packs.length == 0)
		{
			log("Default pack isn't set.");
			return null;
		}	

		const neededPack = packs.find(pack => pack.id == customerSettings.defaultPackForAddingId);
		if(!neededPack)
		{
			log("selected pack wasn't found");
		}
		else
		{
			return neededPack;
		}
	} catch (e) {
		log("error getDefaultPack", e);
	}

	return "";
}

export const setDefaultPack = async (pack: Pack) => {
	try {
		var customerSettings = await getCustomerSettings();

		if(!customerSettings)
		{
			log("CustomerSettings is null in setSelectedPack");
			return;
		}

		customerSettings.defaultPackForAddingId = pack.id;

		await AsyncStorage.setItem(customerSettingsKey, JSON.stringify(customerSettings));
	} catch (e) {
		log("error setSelectedPack", e);
	}
}