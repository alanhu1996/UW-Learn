import React from 'react'
import SearchBar from '../../components/SearchBar'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import {makeSelectCourseSearchText} from './selectors'
import {searchUWCoursesByCode} from '../../actions/mainAppActions'

const mapStateToProps = createStructuredSelector({
	courseSearchText: makeSelectCourseSearchText()
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

	componentDidLoad() {
		this.props.searchUWCoursesByCode('cs246')

	}
	render() {
		return (<SearchBar />)
	}


}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)