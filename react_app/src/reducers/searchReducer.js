export const searchString = (state = '', action) => {
    if (action.type === 'UPDATE_SEARCH') {
        return action.payload == null ? '' : action.payload; 
    }
    return state;
}