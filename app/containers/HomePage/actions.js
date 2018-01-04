import * as types from './constants';

export const searchUWCoursesByCode = (course) => {
	console.log('In searchUWCoursesByCode.' + course)
	return {
  		type: types.LOAD_ALL_COURSES
  	}
}