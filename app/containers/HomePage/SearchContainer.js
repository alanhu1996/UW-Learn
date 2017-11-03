import React from 'react'
import SearchBar from './components/SearchBar'


const mapStateToProps = (state) => {
	return {
		courseSearchText: state.home.courseSearchText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		searchUWCoursesByCode: searchUWCoursesByCode(code) => {
			dispatch(searchUWCoursesByCode(code))

		}
	}
}
class SearchContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}


	render() {
		return (<SearchBar />)
	}


}

export default SearchContainer