
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

export const fetched_courses = courses => {
    return {
        type: "FETCHED_COURSES",
        data: courses
    };
};

export const fetchCourses = (currentPage) => {
    return function (dispatch, getState) {
        const url = `/courses?page=` + currentPage;
        return fetch(url)
            .then(
                data => data.json())
            .then(data => {
                    dispatch(change_page_count(data['pageCount'])) 
                    dispatch(fetched_courses(data['data']))
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
        return fetch(`/courses/`+courseId, {
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

export const fetchReviews = (courseId) => {
  return function(dispatch, getState) {
    return fetch(`/reviews/course/`+courseId)
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

export const checkStatus = () => {
    return function(dispatch , getState) {
        return fetch(`/auth/checkStatus`, {credentials: 'include'})
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
        return fetch(`/auth/logout`, {credentials: 'include'})
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

export const authenticated = (payload) => {
    return {
        type: 'AUTH',
        payload: payload,
    }
}

export const addReview = (review, rating, courseId) => {
    return function(dispatch, getState) {
        return fetch(`/reviews/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                Course_id: courseId, 
                Rating: rating, 
                Comments: review
            }),
            credentials: 'include'
        })
        .then((responseJson) => {
            dispatch(fetchReviews(courseId));
            dispatch(toggleAddReviewBox(false));
            return responseJson.success;
        })
        .catch((error) => {
            console.error(error);
        });
    }
}
export const fetched_reviews = reviews => {
  return {
    type: "FETCHED_REVIEWS",
    data: reviews
  };
};

export const change_page = page => {
    return {
        type: "CHANGE_PAGE",
        data: page
    }
}

export const change_page_count = count => {
    return {
        type: "CHANGE_PAGE_COUNT",
        data: count
    }
}
