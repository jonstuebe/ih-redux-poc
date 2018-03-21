import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";

import units, { entity as unitsEntity } from "./units";
import users from "./users";

export default reduceReducers(
	combineReducers({
		units,
		users
	}),
	unitsEntity
);
