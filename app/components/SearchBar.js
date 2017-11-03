import React from 'react'
import TextField from 'material-ui/TextField'
import { Flex, Box } from 'reflexbox'

class SearchBar extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Flex pt={2} pb={2} pr={2} pl={2}>
			<TextField value={this.props.courseSearchText} hintText='Enter a course code'/>
		</Flex>)
	}

}

export default SearchBar