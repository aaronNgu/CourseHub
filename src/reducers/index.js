import { combineReducers } from 'redux';

let default_data = {
    CPSC110: {
      summary : {rating: 5,  description: "Basic Computation"},
      reviews: {1: {user_id: 0, comment: 'this is a good course'}}
    },
    ENGL112: {
      summary : {rating: 4,  description: "English Literature"},
      reviews: {1: {user_id: 1, comment: 'I really enjoyed the course'}}
    },
    CPSC213: {
      summary : {rating: 3,  description: "Introduction to Computer Systems"},
      reviews: {1: {user_id: 2, comment: 'This course was confusing!'}}
    }
}

// example of a reducer to mutate the count variable/state
const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return count + action.payload;
    }
    return count;
}

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
  return courseList;
};

export default combineReducers({
    count: counterReducer,
    courseList: courseReducer
});
