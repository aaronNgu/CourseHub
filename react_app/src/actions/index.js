
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

export const fetched_courses = courses => {
    return {
        type: "FETCHED_COURSES",
        data: courses
    };
};

export const fetchCourses = () => {
    return function (dispatch, getState) {
        return fetch(`/courses`)
            .then(
                data => data.json())
            .then(data => {
                    dispatch(fetched_courses(data))
                }
            )
            .catch(err => console.log(err));
    };
};

export const added_Courses = (name, desc) => {
    return {
        type: 'ADDED_COURSE',
        payload: {desc: desc, _id: name}
    };
};

export const addCourse = (name, desc) => {
    return function (dispatch, getState) {
        return fetch(`/courses`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                description: desc,
                _id: name,
                overall_rating: '-'
            })
        })
            .then((responseJson) => {
                dispatch(added_Courses(name, desc))
                return responseJson.success;
            })
            .catch((error) => {
                console.error(error);
            });
    };
};

export const deleteCourse = courseId => {
    return function (dispatch, getState) {
        console.log("Action: " + courseId);
        return fetch(`/courses`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'courseId': courseId})
    }).then((res) => {
            console.log(res);
            dispatch({
                type: 'DELETE_COURSE',
                payload: courseId
            })
            return res.status;
        })
            .catch((error) => {
                console.error(error);
            });
    };
};

export const update_filters = (yearLvFilter, ratingFilter) => {
    return {
        type: "UPDATE_FILTERS",
        payload: {yearLvFilter, ratingFilter}
    };
};

export const authenticated = (payload) => {
    return {
        type: 'AUTH',
        payload: payload,
    }
}

export const toggleAddReviewBox = (payload) => {
    return {
        type: 'TOGGLE',
        payload: payload,
    }
}

export const addReviewRating = (payload) => {
    return {
        type: 'CHANGE_RATING',
        payload: payload,
    }
}

export const addReviewReview = (payload) => {
    return {
        type: 'CHANGE_REVIEW',
        payload: payload,
    }
}

export const checkStatus = () => {
    return function(dispatch , getState) {
        return fetch(`http://localhost:9000/auth/checkStatus`, {credentials: 'include'})
        .then(response => response.json())
        .then(data => {
            dispatch(authenticated(data));
        })
        .catch(err => {
            let payload = {
                isAuthenticated: false,
                user: null,
            }
            dispatch(authenticated(payload));
        })
    }
}

export const logout = () => {
    return function (dispatch, getState) {
        return fetch(`http://localhost:9000/auth/logout`, {credentials: 'include'})
        .then(response => response.json())
        .then(data => {
            dispatch(authenticated(data));
        })
        .catch(err => {
            let payload = {
                isAuthenticated: true,
                user: null,
            }
            dispatch(authenticated(payload));
        })
    }
}
export const fetchReviews = (courseId) => {
  return function(dispatch, getState) {
    return fetch(`http://localhost:9000/reviews/course/`+courseId)
      .then(
				data => data.json())
      .then(data => {
					dispatch(fetched_reviews(data))}
      )
      .catch(err => console.log(err));
  };
};

export const fetched_reviews = reviews => {
  return {
    type: "FETCHED_REVIEWS",
    data: reviews
  };
};
