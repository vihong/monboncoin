import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sales from './components/Sales';
import Inventory from './components/Inventory';
import Product from './components/Product';
import NoProductOnlineMessage from './components/NoProductOnlineMessage';
import sampleProducts from './sample-products';
import base from './base';

class App extends React.Component {
	state = {
		products : {},
		sales    : {}
	};

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

	componentDidUpdate() {
		console.log(this.state.sales);
		localStorage.setItem(
			this.props.match.params.dashboard,
			JSON.stringify(this.state.sales)
		);
		console.log('updated');
	}

	componentWillUnmount() {
		console.log('unmounted');
		base.removeBinding(this.ref);
	}

	addProductToState = (newProduct) => {
		const products = { ...this.state.products };
		products[`product${Date.now()}`] = newProduct;
		this.setState({ products });
	};

	loadSampleProducts = () => {
		this.setState({ products: sampleProducts });
	};

	addSaleToState = (key) => {
		const sales = { ...this.state.sales };
		// sales[key] = sales[key] + 1 || 1; //add new sale or update quantity unavailable in existing sale
		sales[key] = 1; //add new sale or update quantity unavailable in existing sale
		this.setState({ sales });
	};

	updateProductState = (updatedProduct, key) => {
		const products = { ...this.state.products };
		products[key] = updatedProduct;
		this.setState({ products });
	};

	deleteProductState = (key) => {
		const products = { ...this.state.products };
		products[key] = null; // "delete products[key]" works but won't update in Firebase
		// delete products[key]; might wanna keep for further addition
		this.deleteSaleState(key);
		this.setState({ products });
	};

	deleteSaleState = (key) => {
		const sales = { ...this.state.sales };
		const products = { ...this.state.products };
		delete sales[key];
		products[key].status = 'available';
		this.setState({ products, sales });
	};

	deleteAllProducts = () => {
		this.setState({ products: null, sales: {} });
	};

	changeStatus = (key) => {
		const products = { ...this.state.products };
		products[key].status = 'unavailable';
		this.setState({ products });
	};

	// RENDER BOX
	render() {
		const productsArray = Object.keys(this.state.products);

		const productComponents = Object.keys(
			this.state.products
		).map((key) => (
			<Product
				key={key}
				index={key}
				details={this.state.products[key]}
				addSaleToState={this.addSaleToState}
				changeStatus={this.changeStatus}
			/>
		));
		const accountName = this.props.match.params.dashboard;
		return (
			<Fragment>
				<Navbar accountName={accountName} />
				<div className="monboncoin-panels">
					<div>
						<Header />
						<ul>
							{productsArray.length === 0 ? (
								<NoProductOnlineMessage />
							) : (
								productComponents
							)}
						</ul>
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
						deleteAllProducts={this.deleteAllProducts}
					/>
				</div>
			</Fragment>
		);
	}
}

export default App;
