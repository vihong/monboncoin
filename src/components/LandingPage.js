import React, { Fragment } from 'react';
import Navbar from './Navbar';
import LoginForm from './LoginForm';

const LandingPage = (props) => {
	return (
		<Fragment>
			<Navbar />
			<LoginForm push={props.history.push} />
		</Fragment>
	);
};

export default LandingPage;
