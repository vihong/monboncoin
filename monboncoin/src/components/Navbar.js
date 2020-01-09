import React from 'react';
import PropTypes from 'prop-types';

class Navbar extends React.Component {
	static propTypes = {
		accountName : PropTypes.string
	};

	render() {
		return (
			<nav>
				<h1>
					<a href="../">monboncoin.fr</a>
					<span>par Vi Hong.</span>
				</h1>
				<div className="account">
					{this.props.accountName ? (
						<img
							src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/19339625881548233621-256.png"
							alt=""
							width="80%"
						/>
					) : null}
					<p className="account-name">{this.props.accountName}</p>
				</div>
			</nav>
		);
	}
}

export default Navbar;
