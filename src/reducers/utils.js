export const addStatusToReducer = (action, key) => {
	if (!action) return null;
	return {
		[`${action}_STARTED`]: (state, action) => {
			const _key = { ...state[key], isLoading: true, error: null };
			return { ...state, [key]: _key };
		},
		[`${action}_FAILED`]: (state, { payload, error }) => {
			const _key = { ...state[key], error: error || payload };
			return { ...state, [key]: _key };
		},
		[`${action}_ENDED`]: (state, action) => {
			const _key = { ...state[key], isLoading: false };
			return { ...state, [key]: _key };
		}
	};
};

export const defaultStatus = {
	isLoading: false,
	hasChanged: false,
	error: null
};
