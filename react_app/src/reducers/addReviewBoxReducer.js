export const addReviewBox = (state = false, action) => {
    if (action.type === 'TOGGLE') {
        return action.payload;
    }
    return state;
}

export const addReviewRating = (state = null, action) => {
    if (action.type === 'CHANGE_RATING') {
        return action.payload;
    }
    return state;
}

export const addReviewReview = (state = '', action) => {
    if (action.type === 'CHANGE_REVIEW') {
        return action.payload;
    }
    return state;
}