import React, { Fragment } from 'react';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';

class Inventory extends React.Component {
	state = {};
	render() {
		const EditFormComponents = Object.keys(
			this.props.products
		).map((key) => (
			<EditProductForm
				product={this.props.products[key]}
				key={key}
				updateProductState={this.props.updateProductState}
				index={key}
				deleteProductState={this.props.deleteProductState}
			/>
		));

		const productsArray = Object.keys(this.props.products);

		return (
			<div className="inventory">
				<h2>Inventaire</h2>
				<div className="buttons">
					<button
						className="demo-button"
						onClick={this.props.loadSampleProducts}
					>
						Générer de fausses annonces <span>&#128176;</span>
					</button>
					<button
						className="demo-button deleteAll-button"
						onClick={this.props.deleteAllProducts}
					>
						Supprimer toutes les annonces <span>&#10008;</span>
					</button>
				</div>
				<AddProductForm
					addProductToState={this.props.addProductToState}
				/>
				{productsArray.length === 0 ? null : (
					<Fragment>
						<hr />
						<p className="edit-form-title">
							Editez vos annonces <span>en live</span>
						</p>
					</Fragment>
				)}
				<ul>{EditFormComponents}</ul>
			</div>
		);
	}
}

export default Inventory;
