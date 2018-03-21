import { schema } from "normalizr";

export const user = new schema.Entity("user");
export const unit = new schema.Entity("units", {
	users: [user]
});
export const units = [unit];
