import React, { Fragment } from 'react';

const textStyle = {
	fontFamily : '"Mountains of Christmas", cursive',
	fontSize   : '70px',
	textAlign  : 'center',
	marginTop  : '15%',
	color      : 'green'
};

const buttonStyle = {
	display      : 'flex',
	margin       : 'auto',
	background   : '#fff',
	fontFamily   : '"Roboto", sans-serif',
	color        : '#4183d7',
	borderRadius : '5px'
};

const alinkStyle = {
	textDecoration : 'none'
};

const NotFound = () => {
	return (
		<Fragment>
			<h1 style={textStyle}>
				Nous sommes désolés !<br />Erreur page
			</h1>
			<br />
			<button style={buttonStyle}>
				<a href="../" style={alinkStyle}>
					Retourner sur la home page{' '}
				</a>
			</button>
		</Fragment>
	);
};

export default NotFound;
