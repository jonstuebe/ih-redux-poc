import { handleActions } from "redux-actions";
import { normalize } from "normalizr";
import { unit, units } from "../schema";
import { addStatusToReducer, defaultStatus } from "./utils";

export default handleActions(
	{
		UNITS: {
			COLLECTION: addStatusToReducer("FETCH", "collection"),
			SINGLE: addStatusToReducer("FETCH", "single")
		}
	},
	{
		records: {},
		collection: {
			...defaultStatus
		},
		single: {
			...defaultStatus
		}
	}
);

export const entity = handleActions(
	{
		UNITS: {
			COLLECTION: {
				FETCH_SUCCEEDED: (state, { payload }) => {
					const { entities, result } = normalize(payload, units);
					console.log(result);
					if (entities) {
						return {
							...state,
							units: {
								records: entities.units
							},
							users: {
								records: entities.user
							}
						};
					}
					return state;
				}
			},
			SINGLE: {
				FETCH_SUCCEEDED: (state, { payload }) => {
					const { entities, result } = normalize(payload, unit);
					if (entities) {
						return {
							...state,
							units: {
								records: entities.units
							},
							users: {
								records: entities.user
							}
						};
					}
					return state;
				}
			}
		}
	},
	{}
);
