import * as types from './actionTypes';

export const searchUWCoursesByCode = (course) => {
	console.log('In searchUWCoursesByCode.' + course)
	return {
  		type: types.UPDATE_COURSE_SEARCH_RESULT
  	}
}