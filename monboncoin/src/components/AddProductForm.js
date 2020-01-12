import React from 'react';

class AddProductForm extends React.Component {
	state = {};

	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	// deliveryRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	createProduct = (event) => {
		event.preventDefault();
		const newProduct = {
			name   : this.nameRef.current.value,
			price  : parseFloat(this.priceRef.current.value),
			status : this.statusRef.current.value,
			// delivery : this.deliveryRef.current.value,
			desc   : this.descRef.current.value,
			image  : this.imageRef.current.value
		};
		this.props.addProductToState(newProduct);
		event.currentTarget.reset();
	};

	render() {
		return (
			<form className="fish-edit" onSubmit={this.createProduct}>
				<input
					name="name"
					ref={this.nameRef}
					type="text"
					placeholder="Produit"
				/>
				<input
					name="price"
					ref={this.priceRef}
					type="text"
					required
					placeholder="Prix"
				/>
				<select name="status" ref={this.statusRef}>
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
					ref={this.descRef}
					placeholder="Expliquez pourquoi votre produit est génial"
				/>
				<input
					name="image"
					ref={this.imageRef}
					type="text"
					placeholder="URL directe d'une image trouvée sur Google ou ailleurs"
				/>
				<button type="submit">+ Mettre ce produit en vente</button>
			</form>
		);
	}
}

export default AddProductForm;
