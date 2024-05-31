// courseActions.js
import axios from 'axios';

export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

export const fetchCoursesRequest = () => ({
  type: FETCH_COURSES_REQUEST
});

export const fetchCoursesSuccess = courses => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses
});

export const fetchCoursesFailure = error => ({
  type: FETCH_COURSES_FAILURE,
  payload: error
});

export const fetchCourses = () => async dispatch => {
  dispatch(fetchCoursesRequest());
  try {
    const res = await axios.get('/api/courses');
    dispatch(fetchCoursesSuccess(res.data));
  } catch (error) {
    dispatch(fetchCoursesFailure(error.message));
  }
};
