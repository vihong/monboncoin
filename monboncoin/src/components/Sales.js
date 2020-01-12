import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Sales extends React.Component {
	state = {};

	renderSales = (key) => {
		const product = this.props.products[key];
		const quantity = this.props.sales[key];
		// const salesNewlyMade = quantity * product.price;
		const isAvailable = product && product.status === 'available';
		// if (!product) return null;
		if (!isAvailable) {
			return (
				<CSSTransition
					classNames="order"
					key={key}
					timeout={{ enter: 250, exit: 250 }}
				>
					<li key={key}>
						Désolé "{product ? product.name : 'produit'}" nest plus
						disponible
					</li>
				</CSSTransition>
			);
		}
		return (
			<CSSTransition
				classNames="order"
				key={key}
				timeout={{ enter: 250, exit: 250 }}
			>
				<li key={key}>
					{quantity} x {product.name}
					{formatPrice(quantity * product.price)}
					<button onClick={() => this.props.deleteSaleState(key)}>
						&#10007;
					</button>
				</li>
			</CSSTransition>
		);
	};

	render() {
		const salesArray = Object.keys(this.props.sales);

		const salesAmount = salesArray.reduce((salesAlreadyMade, key) => {
			const product = this.props.products[key];
			const quantity = this.props.sales[key];
			// const salesNewlyMade = quantity * product.price;
			if (!product) return null; // this line checks whether localStorage has something before rendering for the first time
			const isAvailable = product && product.status === 'available';

			if (isAvailable) {
				return salesAlreadyMade + quantity * product.price;
			}
			return salesAlreadyMade;
		}, 0);

		return (
			<div className="order-wrap">
				<h2>Vos ventes</h2>
				<TransitionGroup component="ul" className="order">
					{salesArray.map((key) => this.renderSales(key))}
				</TransitionGroup>
				<div className="total">
					<strong>
						Total : {formatPrice(parseFloat(salesAmount))}
					</strong>
				</div>
			</div>
		);
	}
}

export default Sales;
