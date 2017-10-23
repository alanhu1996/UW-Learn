import React from 'react'

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'

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
		    iconElementRight={<FlatButton label="Explore Courses" primary={true} />}
		  />
		)
	}
}


export default NavigationBar