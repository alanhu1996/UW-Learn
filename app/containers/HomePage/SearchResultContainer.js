import React from 'react'
import SearchResult from './components/SearchResult'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		searchResultData: state.home.searchResultData
	}

}

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
			<SearchResult searchResultData={this.props.searchResultData}/>
			)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer)