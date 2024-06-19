import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

// Composant fonctionnel ToiletCard qui accepte les props 'toilet' et 'addToCart'
const ToiletCard = ({ toilet, addToCart }) => {

    // Fonction pour ajouter un article aux favoris
    const addToFavorites = () => {
        alert(`${toilet.title} ajouté au favori !`);
    };

    // Fonction pour afficher les informations d'un article dans une alerte
    const showInformation = () => {
        alert(`Toilette : ${toilet.title}\nDescription : ${toilet.description}`);
    };

    return (
        <div className="card">
            {/* Bouton d'information en haut à droite de la carte */}
            <div className="top-right-container">
                <button className="btn-info" onClick={showInformation}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                </button>
            </div>

            <img src={toilet.image} alt={toilet.title} />
            <h2>{toilet.title}</h2>
            <p>{toilet.description}</p>
            <p>Prix : {toilet.price} €</p>

            <div className="button-container">
                {/* Bouton pour ajouter aux favoris */}
                <button className="btn-favorite" onClick={addToFavorites}>
                    <FontAwesomeIcon icon={faHeart} /> Ajouter aux favoris
                </button>
                {/* Bouton pour ajouter au panier */}
                <button className="btn-cart" onClick={() => addToCart(toilet)}>
                    <FontAwesomeIcon icon={faCartPlus} /> Ajouter au panier
                </button>
            </div>
        </div>
    );
};

export default ToiletCard;
