import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import App from '../App';
import NotFound from './NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route path="/mon-compte/:dashboard" component={App} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
