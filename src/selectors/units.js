import { denormalize } from "normalizr";
import { unit, units } from "../schema";
import { usersSelector } from "./users";

export const unitsRecordsSelector = state => state.units.records;
export const unitIsLoading = state => state.units.isLoading;
export const singleUnitSelector = (state, id) => {
	return {
		record: denormalize(unitsRecordsSelector(state)[id], unit, {
			user: usersSelector(state)
		}),
		...state.units.single
	};
};
export const collectionUnitsSelector = state => {
	// console.clear();
	// console.log(unitsRecordsSelector(state));
	// console.log(
	// 	denormalize(unitsRecordsSelector(state), units, {
	// 		user: usersSelector(state)
	// 	}).units
	// );
	return {
		records: denormalize(unitsRecordsSelector(state), units, {
			user: usersSelector(state)
		}),
		...state.units.collection
	};
};
