import React from 'react';

class LoginForm extends React.Component {
	state = {};

	myInput = React.createRef();

	// below, the method is bound to the instance, so "this" does have a value i.e. the instance
	goToStore = (event) => {
		event.preventDefault();
		const clientName = this.myInput.current.value;
		this.props.push(`/mon-compte/${clientName}`);
	};

	render() {
		return (
			<form
				action=""
				className="store-selector"
				onSubmit={this.goToStore}
			>
				<p>Connexion</p>
				<hr />
				<p>Comment vous appelez-vous ?</p>
				<input
					type="text"
					ref={this.myInput}
					required
					placeholder="Entrez votre prénom..."
				/>
				<button type="submit">Accéder à mon espace</button>
			</form>
		);
	}
}

export default LoginForm;
