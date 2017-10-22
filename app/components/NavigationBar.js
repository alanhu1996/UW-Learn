import React from 'react'

import AppBar from 'material-ui/AppBar';

class NavigationBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
		  <AppBar
		    title="OMG"
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
		  />
		)
	}
}


export default NavigationBar