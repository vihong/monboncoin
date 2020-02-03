import React, { Fragment } from 'react';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';

const Inventory = (props) => {
	const EditFormComponents = Object.keys(props.products).map((key) => (
		<EditProductForm
			product={props.products[key]}
			key={key}
			updateProductState={props.updateProductState}
			index={key}
			deleteProductState={props.deleteProductState}
		/>
	));

	const productsArray = Object.keys(props.products);

	return (
		<div className="inventory">
			<h2>Inventaire</h2>
			<div className="buttons">
				<button
					className="demo-button"
					onClick={props.loadSampleProducts}
				>
					Générer de fausses annonces <span>&#128176;</span>
				</button>
				<button
					className="demo-button deleteAll-button"
					onClick={props.deleteAllProducts}
				>
					Supprimer toutes les annonces <span>&#10008;</span>
				</button>
			</div>
			<AddProductForm addProductToState={props.addProductToState} />
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
};

export default Inventory;
