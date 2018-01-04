import { fromJS } from 'immutable'
import * as actions from './constants'

const initialState = fromJS({
  searchResultData: [],
  courseSearchText: ''
})

function homeFunctionalityReducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_SEARCH_RESULTS_SUCCESS:
    	console.log('in store')
    	console.log(action.courseData)
    	return state.set('searchResultData', action.courseData.data.data)

    default:
    	return state;
  }
}

export default homeFunctionalityReducer;