import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import {addReviewBox, addReviewRating, addReviewReview} from './addReviewBoxReducer';
import {countPage, currentPage} from './paginationReducer';
import {searchString, filterReducer} from './searchFilterReducer';

const courseReducer = (courseList = {}, action) => {
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
        return Object.assign({}, action.data);
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
    toggleAddReviewBox: addReviewBox,
    addReviewRating: addReviewRating,
    addReviewReview: addReviewReview,
    reviewList: reviewReducer,
    countPage: countPage, 
    currentPage: currentPage,
    searchString: searchString,
});

const store = createStore(allReducers, applyMiddleware(thunk))

export default store;
