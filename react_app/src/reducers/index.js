import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';

const yearLvFilter = ['100', '200', '300', '400', '500', '600'];
const ratingFilter = ['1', '2', '3', '4', '5', '*'];

let default_data = {}

const courseReducer = (courseList = default_data, action) => {

    if (action.type === 'DELETE_MESSAGE') {
        let copy = Object.assign({}, courseList);
        delete copy[action.payload];
        return copy;
    }
    if (action.type === 'DELETE_ALL_MESSAGES') {
        courseList = {};
        return courseList;
    }
    if (action.type === 'EDIT_RATING_1') {
        let copy = Object.assign({}, courseList);
        copy[action.payload].summary.rating = 1;
        return copy;
    }
    if (action.type === 'EDIT_RATING_2') {
        let copy = Object.assign({}, courseList);
        copy[action.payload].summary.rating = 2;
        return copy;
    }
    if (action.type === 'EDIT_RATING_3') {
        let copy = Object.assign({}, courseList);
        copy[action.payload].summary.rating = 3;
        return copy;
    }
    if (action.type === 'EDIT_RATING_4') {
        let copy = Object.assign({}, courseList);
        copy[action.payload].summary.rating = 4;
        return copy;
    }
    if (action.type === 'EDIT_RATING_5') {
        let copy = Object.assign({}, courseList);
        copy[action.payload].summary.rating = 5;
        return copy;
    }
    if (action.type === 'FETCHED_COURSES') {
        return Object.assign({}, courseList,
            action.data
        );
    }
    if (action.type === 'ADDED_COURSE') {
        return Object.assign({}, courseList,
            action.data
        );
    }
    return courseList;
};

const filterReducer = (filters = {yearLvFilter: yearLvFilter, ratingFilter: ratingFilter}, action) => {
    if (action.type === 'UPDATE_FILTERS') {
        return Object.assign({}, filters, action.payload);
    }
    return filters;
}

const allReducers = combineReducers({
    courseList: courseReducer,
    filters: filterReducer,
    auth: authReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk))

export default store;
