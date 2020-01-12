import React from 'react';

class EditProductForm extends React.Component {
	// BEHAVIOUR BOX
	handleChange = (event) => {
		const updatedProduct = {
			...this.props.product,
			// new thing in ES6 used right below : "computed property name"
			// it allows you to change dynamically the property you've updated
			[event.currentTarget.name]: event.currentTarget.value
		};
		console.log(updatedProduct);
		this.props.updateProductState(updatedProduct, this.props.index);
	};

	handleDelete = () => {
		this.props.deleteProductState(this.props.index);
	};

	// RENDER BOX
	render() {
		// console.log(this.props.product);
		return (
			<div className="fish-edit">
				<input
					name="name"
					onChange={this.handleChange}
					value={this.props.product.name}
					ref={this.nameRef}
					type="text"
					placeholder="Produit"
				/>
				<input
					name="price"
					onChange={this.handleChange}
					value={this.props.product.price}
					ref={this.priceRef}
					type="text"
					placeholder="Prix"
				/>
				<select
					name="status"
					ref={this.statusRef}
					onChange={this.handleChange}
					value={this.props.product.status}
				>
					<option value="available">actuellement en vente</option>
					<option value="unavailable">vendu</option>
				</select>
				{/* <select name="delivery" ref={this.deliveryRef}>
            <option value="a venir chercher sur place">
                a venir chercher sur place
            </option>
            <option value="échange en mains propres">
                échange en mains propres
            </option>
            <option value="livraison">livraison</option>
        </select> */}
				<textarea
					name="desc"
					onChange={this.handleChange}
					value={this.props.product.desc}
					ref={this.descRef}
					placeholder="Expliquez pourquoi votre produit est génial"
				/>
				<input
					name="image"
					ref={this.imageRef}
					onChange={this.handleChange}
					value={this.props.product.image}
					type="text"
					placeholder="URL directe d'une image trouvée sur Google ou ailleurs"
				/>
				<button onClick={this.handleDelete}>
					+ Supprimer ce produit de vos annonces
				</button>
			</div>
		);
	}
}

export default EditProductForm;
