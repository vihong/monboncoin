import React, { Fragment } from 'react';
import Navbar from './Navbar';
import LoginForm from './LoginForm';

class LandingPage extends React.Component {
	state = {};

	render() {
		return (
			<Fragment>
				<Navbar />
				<LoginForm push={this.props.history.push} />
			</Fragment>
		);
	}
}

export default LandingPage;
