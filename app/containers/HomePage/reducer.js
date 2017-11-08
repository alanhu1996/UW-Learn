import { fromJS } from 'immutable'

const initialState = fromJS({
  searchResultData: [],
  courseSearchText: ''
})

function homeFunctionalityReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
    	console.log(action.resultData)
   		return state
    default:
    	return state;
  }
}

export default homeFunctionalityReducer;