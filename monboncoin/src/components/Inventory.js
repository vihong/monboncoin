import React from 'react';
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
		return (
			<div className="inventory">
				<h2>Qu'avez-vous à vendre ?</h2>
				<AddProductForm
					addProductToState={this.props.addProductToState}
				/>
				<button onClick={this.props.loadSampleProducts}>
					Tester Démo
				</button>
				<ul>{EditFormComponents}</ul>
			</div>
		);
	}
}

export default Inventory;
