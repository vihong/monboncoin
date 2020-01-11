import React from 'react';

const NoProductOnlineMessage = () => {
	return (
		<div className="no-product-online">
			<p>
				Vous n'avez rien à vendre pour l'instant.
				<br />
				<span>
					👉 Utilisez le panel "Inventaire" pour mettre en vente un
					produit ou cliquez sur "Générer de fausses annonces"...
				</span>
			</p>
		</div>
	);
};

export default NoProductOnlineMessage;
