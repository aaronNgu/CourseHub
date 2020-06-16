import { combineReducers } from 'redux';

// example of a reducer to mutate the count variable/state
const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return count + action.payload;
    }
    return count;
}

export default combineReducers({
    count: counterReducer, 
});
