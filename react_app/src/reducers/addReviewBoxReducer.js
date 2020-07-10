const addReviewBox = (state = false, action) => {
    if (action.type === 'TOGGLE') {
        return action.payload;
    }
    return state;
}

export default addReviewBox;
