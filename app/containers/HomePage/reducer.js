import { fromJS } from 'immutable'
import * as actions from '../../actions/actionTypes'

const initialState = fromJS({
  searchResultData: [],
  courseSearchText: ''
})

function homeFunctionalityReducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_COURSE_SEARCH_RESULT:
    	console.log(action.resultData)
   		return state
    default:
    	return state;
  }
}

export default homeFunctionalityReducer;