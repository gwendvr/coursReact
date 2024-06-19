import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

const ToiletCard = ({ toilet }) => {
    const addToCart = () => {
        // Logique pour ajouter au panier
    };

    const addToFavorites = () => {
        // Logique pour ajouter aux favoris
    };

    return (
        <div className="card">
            <img src={toilet.image} alt={toilet.title} /> {/* Affiche l'image, etc... */}
            <h2>{toilet.title}</h2>
            <p>{toilet.description}</p>
            <p>Prix : {toilet.price} €</p>
            <div className="button-container">
                <button className="btn-favorite" onClick={addToFavorites}> {/* Bouton "Ajouter aux favoris" avec la fonction onclick qui se ralise quand on click sur le bouton */}
                    <FontAwesomeIcon icon={faHeart} /> Ajouter aux favoris
                </button>
                <button className="btn-cart" onClick={addToCart}> {/* Bouton "Ajouter au panier" */}
                    <FontAwesomeIcon icon={faCartPlus} /> Ajouter au panier
                </button>
            </div>
        </div>
    );
};

export default ToiletCard;
