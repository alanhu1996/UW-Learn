import React from 'react'
import SearchResult from '../../components/SearchResult'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {makeSelectCourseAllResult} from './selectors'

const mapStateToProps = createStructuredSelector({
	courseResultData: makeSelectCourseAllResult()
})

const mapDispatchToProps = (dispatch) => {
	return {
		
	}

}
class SearchResultContainer extends React.Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<SearchResult searchResultData={this.props.courseResultData}/>
			)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer)