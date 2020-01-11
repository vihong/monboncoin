import React, { Fragment } from 'react';
import Navbar from './Navbar';

const NotFound = () => {
	return (
		<Fragment>
			<Navbar />
			<div className="not-found">
				<h1>
					Nous sommes désolés !<br />Erreur page
				</h1>
				<br />
				<button>
					<a href="../">Retourner sur la home page </a>
				</button>
			</div>
		</Fragment>
	);
};

export default NotFound;
