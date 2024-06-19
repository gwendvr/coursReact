import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'; // Importez les icônes dont vous avez besoin

const ToiletCard = ({ toilet }) => {
    const addToCart = () => {
        // Logique pour ajouter au panier
    };

    const addToFavorites = () => {
        // Logique pour ajouter aux favoris
    };

    return (
        <div className="card">
            <img src={toilet.image} alt={toilet.title} />
            <h2>{toilet.title}</h2>
            <p>{toilet.description}</p>
            <p>Prix : {toilet.price} €</p>
            <div className="button-container">
                <button className="btn-favorite" onClick={addToFavorites}>
                    <FontAwesomeIcon icon={faHeart} /> Ajouter aux favoris
                </button>
                <button className="btn-cart" onClick={addToCart}>
                    <FontAwesomeIcon icon={faCartPlus} /> Ajouter au panier
                </button>
            </div>
        </div>
    );
};

export default ToiletCard;
