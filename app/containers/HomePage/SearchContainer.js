import React from 'react'
import SearchBar from '../../components/SearchBar'
import SearchResult from '../../components/SearchResult'
import { connect } from 'react-redux'

import { Flex, Box } from 'reflexbox'
import { createStructuredSelector } from 'reselect'

import {makeSelectCourseSearchText, makeSelectCourseAllResult} from './selectors'
import {searchUWCoursesByCode} from './actions'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
const mapStateToProps = createStructuredSelector({
	courseSearchText: makeSelectCourseSearchText(),
	courseResultData: makeSelectCourseAllResult()
})

const mapDispatchToProps = (dispatch) => {
	return {
		searchUWCoursesByCode: (code) => {
			dispatch(searchUWCoursesByCode(code))

		}
	}
}
class SearchContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		console.log('Componentload')
		this.props.searchUWCoursesByCode('cs246')

	}
	render() {
		console.log('render container')
		return (<Flex column>
			<SearchBar />
			<SearchResult searchResultData={this.props.courseResultData}/>
			</Flex>)
	}


}
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga })
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  	withReducer,
  	withSaga,
  	withConnect
)(SearchContainer)
