import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
	return (
		<header className="top top-header">
			<h2>Annonces en ligne </h2>
			<p>{props.tagline}</p>
		</header>
	);
};

Header.propTypes = {
	tagline : PropTypes.string.isRequired
};

export default Header;
