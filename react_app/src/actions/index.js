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

export const deleteAllMessages = (courseList) => {
    return {
        type: 'DELETE_ALL_MESSAGES',
        payload: courseList
    };
}

export const editMessage = (courseNumber) => {
    return {
        type: 'EDIT_MESSAGE',
        payload: courseNumber
    };
}

export const editRating1 = (courseNumber) => {
    return {
        type: 'EDIT_RATING_1',
        payload: courseNumber
    };
}
export const editRating2 = (courseNumber) => {
    return {
        type: 'EDIT_RATING_2',
        payload: courseNumber
    };
}
export const editRating3 = (courseNumber) => {
    return {
        type: 'EDIT_RATING_3',
        payload: courseNumber
    };
}
export const editRating4 = (courseNumber) => {
    return {
        type: 'EDIT_RATING_4',
        payload: courseNumber
    };
}
export const editRating5 = (courseNumber) => {
    return {
        type: 'EDIT_RATING_5',
        payload: courseNumber
    };
}
