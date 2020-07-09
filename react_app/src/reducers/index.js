import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';

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

const allReducers = combineReducers({
  courseList: courseReducer,
  auth: authReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk))

export default store;
