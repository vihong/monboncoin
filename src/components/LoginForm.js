import React from 'react';

const LoginForm = (props) => {
	const myInput = React.createRef();

	// below, the method is bound to the instance, so "this" does have a value i.e. the instance
	const goToStore = (event) => {
		event.preventDefault();
		const clientName = myInput.current.value;
		props.push(`/mon-compte/${clientName}`);
	};

	return (
		<form action="" className="login-form" onSubmit={goToStore}>
			<p>Connexion</p>
			<hr />
			<p>Comment vous appelez-vous ?</p>
			<input
				type="text"
				ref={myInput}
				required
				placeholder="Entrez votre prénom..."
			/>
			<button type="submit">Accéder à mon espace</button>
		</form>
	);
};

export default LoginForm;
