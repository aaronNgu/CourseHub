export const searchString = (state = '', action) => {
	if (action.type === 'UPDATE_SEARCH') {
		return action.payload == null ? '' : action.payload;
	}
	return state;
};

const yearLvFilter = ['100', '200', '300', '400', '500', '600'];
const ratingFilter = ['1', '2', '3', '4', '5', '-'];

export const filterReducer = (
	filters = { yearLvFilter: yearLvFilter, ratingFilter: ratingFilter },
	action
) => {
	if (action.type === 'UPDATE_FILTERS') {
		return Object.assign({}, filters, action.payload);
	}
	return filters;
};
