import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// Composant fonctionnel CartButton qui accepte les props 'itemCount' et 'onClick'
const CartButton = ({ itemCount, onClick }) => {
    return (
        // Bouton de panier avec une icône et le nombre d'articles
        <button className="cart-button" onClick={onClick}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {/* Affichage du nombre d'articles uniquement si itemCount est supérieur à 0 */}
            {itemCount > 0 && <span className="item-count">{itemCount}</span>}
        </button>
    );
};

export default CartButton;
