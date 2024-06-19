import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartButton = ({ itemCount, onClick }) => {
    return (
        <button className="cart-button" onClick={onClick}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {itemCount > 0 && <span className="item-count">{itemCount}</span>}
        </button>
    );
};

export default CartButton;
