import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Product extends React.Component {
	static propTypes = {
		details        : PropTypes.shape({
			name   : PropTypes.string,
			price  : PropTypes.number,
			status : PropTypes.string,
			desc   : PropTypes.string,
			image  : PropTypes.string
		}),
		addSaleToState : PropTypes.func,
		changeStatus   : PropTypes.func
	};

	handleClick = () => {
		this.props.addSaleToState(this.props.index);
		this.props.changeStatus(this.props.index);
	};

	render() {
		const { name, price, status, desc, image } = this.props.details;
		const isAvailable = status === 'available';

		return (
			<li className="ad-online">
				<div className="product-image">
					<img src={image} alt={name} />
				</div>
				<div className="product-text">
					<h3 className="product-name">{name}</h3>
					<span className="price">{formatPrice(price)}</span>
					<p>{desc}</p>
					<button disabled={!isAvailable} onClick={this.handleClick}>
						{isAvailable ? (
							'Marquer comme vendu'
						) : (
							"C'est vendu !"
						)}{' '}
					</button>
				</div>
			</li>
		);
	}
}

export default Product;
