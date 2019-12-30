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
			//status : this.statusRef.current.value,
			status : 'available',
			// delivery : this.deliveryRef.current.value,
			desc   : this.descRef.current.value,
			image  : this.imageRef.current.value
		};
		this.props.addProductToState(newProduct);
		event.currentTarget.reset();
	};

	render() {
		return (
			<form className="product-add" onSubmit={this.createProduct}>
				<input
					name="name"
					ref={this.nameRef}
					type="text"
					required
					placeholder="Produit"
					maxLength="20"
				/>
				<input
					name="price"
					ref={this.priceRef}
					type="number"
					required
					placeholder="Prix"
					step="0.01"
				/>
				{/* <select name="status" ref={this.statusRef}>
					<option value="available">actuellement en vente</option>
					<option value="unavailable">vendu</option>
				</select> */}
				<textarea
					name="desc"
					ref={this.descRef}
					placeholder="Expliquez pourquoi votre produit est génial"
					maxLength="200"
				/>
				<input
					name="image"
					ref={this.imageRef}
					type="text"
					placeholder="URL de l'image, ex: https://static.smallable.com/1028248-622x622q80/peluche-singe.jpg"
				/>
				<button type="submit">Mettre en vente</button>
			</form>
		);
	}
}

export default AddProductForm;
