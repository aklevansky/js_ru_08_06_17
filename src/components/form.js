import React from 'react';

export default class Form extends React.Component {

	state = {
		userName: 'Anton'
	}

	render() {
		return (<div>Name <input type="text" value={this.state.userName} onChange={this.handleUserChange}/></div>);
	}

	handleUserChange = (ev) => {
        this.setState({userName: ev.target.value});
    }
}