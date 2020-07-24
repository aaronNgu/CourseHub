export const currentPage = (state = 0, action) => {
    if (action.type === 'CHANGE_PAGE') {
        return action.data
    }
    return state;
}

export const countPage = (state = 10, action) => {
    return state
}