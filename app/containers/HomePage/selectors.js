
/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectHome = (state) => state.get('home')

const makeSelectCourseSearchText = () => createSelector(
  selectHome,
  (homeState) => homeState.get('courseSearchText')
)

export {
  selectHome,
  makeSelectCourseSearchText,
}