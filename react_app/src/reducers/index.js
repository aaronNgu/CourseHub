import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';

const yearLvFilter = ['100', '200', '300', '400', '500', '600'];
const ratingFilter = ['1', '2', '3', '4', '5', '*'];

const courseReducer = (courseList = {}, action) => {
    //TODO: remove irrelevant reducers
    if (action.type === 'DELETE_MESSAGE') {
        let copy = Object.assign({}, courseList);
        delete copy[action.payload];
        return copy;
    }
    if (action.type === 'DELETE_ALL_MESSAGES') {
        courseList = {};
        return courseList;
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
    if (action.type === 'DELETE_COURSE') {
        return Object.values(courseList).filter((course) => course._id !== action.payload);
    }
    return courseList;
};

const filterReducer = (filters = {yearLvFilter: yearLvFilter, ratingFilter: ratingFilter}, action) => {
    if (action.type === 'UPDATE_FILTERS') {
        return Object.assign({}, filters, action.payload);
    }
    return filters;
}

const reviewReducer = (reviewList = {}, action) => {
    if (action.type === 'FETCHED_REVIEWS') {
  return Object.assign({}, reviewList,
    action.data
  );
}
    return reviewList;
};

const allReducers = combineReducers({
    courseList: courseReducer,
    filters: filterReducer,
    auth: authReducer,
    reviewList: reviewReducer
});

const store = createStore(allReducers, applyMiddleware(thunk))

export default store;
