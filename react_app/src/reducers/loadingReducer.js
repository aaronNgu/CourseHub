export const homepageLoadingReducer = (state = true, action) => {
	if (action.type === 'HOMEPAGE_ISLOADING') {
		return action.data;
	}
	return state;
};

export const coursepageLoadingReducer = (state = true, action) => {
	if (action.type === 'COURSEPAGE_ISLOADING') {
		return action.data;
	}
	return state;
};

export const courseoverviewLoadingReducer = (state = true, action) => {
	if (action.type === 'COURSEOVERVIEW_ISLOADING') {
		return action.data;
	}
	return state;
};
