import React from 'react'

import {List, ListItem} from 'material-ui/List'
import { Flex, Box } from 'reflexbox'

class SearchResult extends React.Component {


	constructor(props){
		super(props)
		this.state = {}
	}

	generateResultItems(data){
		let result = data.map(item => {
			let courseCode = item.subject + item.catalog_number
			let title = item.title
			return (
				<Flex>
				<ListItem primaryText={courseCode} secondaryText={title}/>
				</Flex>
				)
		})
	}
	render() {

		return (
			<Flex pt={1} pb={1}>
				{this.generateResultItems(this.props.searchResultData)}
			</Flex>
			)

	}
}

export default SearchResult