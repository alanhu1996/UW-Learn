import { put, call } from 'redux-saga/effects';
import { getCourseList } from '../Api/api';
import * as types from '../actions/actionTypes';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* searchCourseSaga({ payload }) {
  try {
    const courseData = yield call(getCourseList, payload)
    yield [
      put({ type: types.UPDATE_SEARCH_RESULTS_SUCCESS, videos })
    ];
  } catch (error) {
    yield put({ type: 'UPDATE_SEARCH_RESULTS_ERROR', error });
  }
}