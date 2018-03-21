import {
	fetchUnit as ApiFetchUnit,
	fetchUnits as ApiFetchUnits,
	fetchUnitError as ApiFetchUnitError
} from "../mockApi";
import { createActionThunk } from "@waypointhomes/redux-thunk-actions";

/*

const change = createAction('UNITS/SINGLE/CHANGE')

const change = value => {
	return {
		type: 'UNITS/SINGLE/CHANGE',
		value
	}
}

createActions({
	UNITS: {
		SINGLE: {
			CHANGE: value => ({ value })
		}
	}
})

*/

export const fetchUnits = createActionThunk(
	"UNITS/COLLECTION/FETCH",
	ApiFetchUnits
);

export const fetchUnit = createActionThunk("UNITS/SINGLE/FETCH", ApiFetchUnit);
export const fetchUnitError = createActionThunk(
	"UNITS/SINGLE/FETCH",
	ApiFetchUnitError
);
