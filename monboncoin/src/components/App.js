import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Sales from './Sales';
import Inventory from './Inventory';
import Product from './Product';
import sampleFishes from '../sample-fishes';
import sampleProducts from '../sample-products';
import base from '../base';

class App extends React.Component {
	// STATE BOX
	state = {
		products : {},
		sales    : {}
	};

	// LIFECYCLE METHODS
	componentDidMount() {
		const { params } = this.props.match;
		const localStorageRef = localStorage.getItem(params.dashboard);
		if (localStorageRef) {
			console.log('Restoring it');
			console.log(JSON.parse(localStorageRef));
			this.setState({ sales: JSON.parse(localStorageRef) });
		}
		console.log(localStorageRef);
		this.ref = base.syncState(`${params.dashboard}/products`, {
			context : this,
			state   : 'products'
		});
	}

	componentWillUnmount() {
		console.log('unmounted');
		base.removeBinding(this.ref);
	}

	componentDidUpdate() {
		console.log(this.state.sales);
		localStorage.setItem(
			this.props.match.params.dashboard,
			JSON.stringify(this.state.sales)
		);
		console.log('UPDATED');
	}

	// BEHAVIOUR BOX
	addProductToState = (product) => {
		const products = { ...this.state.products };
		products[`product${Date.now()}`] = product;
		this.setState({ products });
	};

	loadSampleProducts = () => {
		this.setState({ products: sampleProducts });
	};

	addSaleToState = (key) => {
		const sales = { ...this.state.sales };
		// sales[key] = sales[key] + 1 || 1; //add new sale or update quantity sold in existing sale
		sales[key] = 1; //add new sale or update quantity sold in existing sale
		this.setState({ sales });
	};

	updateProductState = (updatedProduct, key) => {
		// alert(updatedProduct, key);
		const products = { ...this.state.products };
		products[key] = updatedProduct;
		this.setState({ products });
	};

	deleteProductState = (key) => {
		// console.log(`key of the product to delete: ${key}`);
		const products = { ...this.state.products };
		// console.log(products);
		products[key] = null; // "delete products[key]" works but won't update in Firebase
		// delete products[key];
		this.deleteSaleState(key);
		this.setState({ products });
	};

	deleteSaleState = (key) => {
		const sales = { ...this.state.sales };
		delete sales[key];
		this.setState({ sales });
	};

	// RENDER BOX
	render() {
		const productComponents = Object.keys(
			this.state.products
		).map((key) => (
			<Product
				key={key}
				index={key}
				details={this.state.products[key]}
				addSaleToState={this.addSaleToState}
			/>
		));
		return (
			<Fragment>
				<Navbar />
				<div className="catch-of-the-day">
					<div className="menu">
						<Header />
						<ul className="fishes">{productComponents}</ul>
					</div>
					<Sales
						products={this.state.products}
						sales={this.state.sales}
						deleteSaleState={this.deleteSaleState}
					/>
					<Inventory
						addProductToState={this.addProductToState}
						loadSampleProducts={this.loadSampleProducts}
						products={this.state.products}
						updateProductState={this.updateProductState}
						deleteProductState={this.deleteProductState}
					/>
				</div>
			</Fragment>
		);
	}
}

export default App;
