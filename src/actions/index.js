// example of an action
export const increment = (amount) => {
    return {
        type:  'INCREMENT_COUNTER',
        payload: amount
    };
}

export const deleteMessage = (courseNumber) => {
    return {
        type: 'DELETE_MESSAGE',
        payload: courseNumber
    };
}
