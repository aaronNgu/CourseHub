import { combineReducers } from 'redux';

let default_data = {
    CPSC110: {
      summary : {rating: 5,  description: "Basic Computation"},
      reviews: {1: {user_id: 0, comment: 'this is a good course'}}
    },
    ENGL112: {
      summary : {rating: 4,  description: "English Literature"},
      reviews: {1: {user_id: 1, comment: 'I really enjoyed the course'}}
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
	return courseList;
};

export default combineReducers({
    count: counterReducer,
    courseList: courseReducer
});
