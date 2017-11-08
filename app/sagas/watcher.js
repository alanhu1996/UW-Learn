import { takeLatest } from 'redux-saga/effects';
import { searchCourseSaga } from './courseSaga';
import * as types from '../actions/actionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchCourseSearchResult() {
  yield takeLatest(types.UPDATE_SEARCH_RESULTS, searchCourseSaga);
}