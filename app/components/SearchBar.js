import React from 'react'
import TextField from 'material-ui/TextField'
import { Flex, Box } from 'reflexbox'

class SearchBar extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (<Flex>
			<TextField hintText='Enter a course code'/>
		</Flex>)
	}


}

export default SearchBar