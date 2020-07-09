
const initialState = {
    isAuthenticated: false,
    user: null,
}

const authReducer = (state = initialState, action) => {
    if (action.type === 'AUTH') {
        return action.payload;
    }
    return state;
}

export default authReducer;
