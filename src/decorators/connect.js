import React from 'react';
import store from '../store';

export default (mapStateToProps, acs) => (OriginalComponent) => class ConnectComponent extends React.Component {

	constructor() {
		super();

		const actionCreators = Object.keys(acs).reduce(acc, key) => ({
			...acc,
			[key]: {...args} => store.dispatch(acs[key](...args))

		})

		this.state = {
			count: mapStateToProps( store.getState(), props )
		}
	}

	componentDidMount() {
		const subscription = store.subscribe( this.handleStoreChange );
	}

	componentWillUnmount() {
		subscription();	
	}

	handleStoreChange = () => {
		this.setState({count: mapStateToProps( store.getState(), this.props ));
	}


	render() {

		return (<OriginalComponent {...this.props} {...this.state}/>)
	}
}