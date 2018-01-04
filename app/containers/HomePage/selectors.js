
/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectHome = (state) => state.get('home')

const makeSelectCourseSearchText = () => createSelector(
  selectHome,
  (homeState) => homeState.get('courseSearchText')
)

const makeSelectCourseAllResult = () => createSelector(
  selectHome,
  (homeState) => {
  	console.log(homeState.get('searchResultData'))
  	return homeState.get('searchResultData')
  }
)


export {
  selectHome,
  makeSelectCourseSearchText,
  makeSelectCourseAllResult
}