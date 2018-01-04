import { put, call, select, takeLatest } from 'redux-saga/effects';
import { getCourseList } from '../../api/api';
import * as types from './constants';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* searchCourseSaga() {
  console.log('saga run')
  try {
    const courseData = yield call(getCourseList)
    yield put({ type: types.UPDATE_SEARCH_RESULTS_SUCCESS, courseData })

  } catch (error) {
    yield put({ type: types.UPDATE_SEARCH_RESULTS_ERROR, error });
  }
}


export default function* uwData() {

  yield takeLatest(types.LOAD_ALL_COURSES, searchCourseSaga);
}
