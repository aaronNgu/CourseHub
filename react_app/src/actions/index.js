/* Courses Action */
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
                    dispatch(homepage_is_loading(false))
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
        return fetch(`/courses/`+courseId, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'courseId': courseId})
    }).then((res) => {
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

export const fetchCourseInfo = (courseId) => {
    return function (dispatch) {
        return fetch(`/courses/` + courseId)
            .then(
                data => data.json())
            .then(data => {
                    dispatch(fetched_course_info(data))
                }
            )
            .catch(err => console.log(err));
    };
}

export const fetched_course_info = courseInfo => {
    return {
        type: "FETCHED_COURSE_INFO",
        data: courseInfo
    };
};

/* Search and Filter Action */
export const update_filters = (yearLvFilter, ratingFilter) => {
    return {
        type: "UPDATE_FILTERS",
        payload: {yearLvFilter, ratingFilter}
    };
};

export const update_search = (searchString) => {
    return {
        type: "UPDATE_SEARCH",
        payload: searchString
    }
}

const formURL = (searchString, yearLvFilter, ratingFilter, page) => {
    let url =`/search?`
    if(searchString !== '' ) {
        url += `searchString=`;
        url += encodeURIComponent(JSON.stringify(searchString));
    }
    if (yearLvFilter.length !== 0) {
        url += url.charAt(url.length - 1) === '?' ? `years=` : `&years=`;
        url += encodeURIComponent(JSON.stringify(yearLvFilter));
    }
    if (ratingFilter.length !== 0) {
        url += url.charAt(url.length - 1) === '?' ? `ratings=` : `&ratings=`;
        url += encodeURIComponent(JSON.stringify(ratingFilter));
    }
    if (page !== undefined) {
        url += url.charAt(url.length - 1) === '?' ? `page=` : `&page=`;
        url += page;
    }
    return url;
}

export const executeSearch = (page, searchString, yearLvFilter, ratingFilter) => {

    return function (dispatch, getState) {
        const url = formURL(searchString, yearLvFilter, ratingFilter, page)
        return fetch(url)
            .then(
                data => data.json())
            .then(data => {
                    dispatch(homepage_is_loading(false))
                    dispatch(change_page_count(data['pageCount']))
                    dispatch(fetched_courses(data['data']))
                }
            )
            .catch(err => console.log(err));
    }
}

/* Reviews Action */
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
            dispatch(fetchCourseInfo(courseId));
            dispatch(fetchReviews(courseId));
            dispatch(toggleAddReviewBox(false));
            dispatch(addReviewRating(null));
            dispatch(addReviewReview(''));
            return responseJson.success;
        })
        .catch((error) => {
            console.error(error);
        });
    }
}

export const fetchCourseOverview = (courseId) => {
    return function(dispatch, getState) {
        dispatch(fetchCourseInfo(courseId));
        dispatch(fetchReviews(courseId));
    }
}

/* Authentication Action */
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
                user: null
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

/* Pagination */
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


/* Loading */
export const homepage_is_loading = isLoading => {
    return {
        type: "HOMEPAGE_ISLOADING",
        data: isLoading
    }
}

export const coursepage_is_loading = isLoading => {
    return {
        type: 'COURSEPAGE_ISLOADING',
        data: isLoading
    }
}