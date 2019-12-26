import React from 'react';
import { formatPrice } from '../helpers';

class Product extends React.Component {
	state = {};

	render() {
		const { name, price, status, desc, image } = this.props.details;
		const isAvailable = status === 'available';

		return (
			<li className="ad-online">
				<img src={image} alt={image} />
				<h3 className="fish-name">
					{name}
					<span className="price">
						{formatPrice(parseFloat(price))}
					</span>
				</h3>
				<p>{desc}</p>
				<button
					disabled={!isAvailable}
					onClick={() => {
						this.props.addSaleToState(this.props.index);
					}}
				>
					{isAvailable ? (
						'Marquer comme vendu'
					) : (
						"Vous l'avez vendu"
					)}{' '}
				</button>
			</li>
		);
	}
}

export default Product;
