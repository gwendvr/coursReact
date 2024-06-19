import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ToiletCard = ({ toilet, addToCart }) => {

    const addToFavorites = () => {
        alert(`${toilet.title} ajouté au favori !`);
    };

    const showInformation = () => {
        alert(`Toilette : ${toilet.title}\nDescription : ${toilet.description}`);
    };

    return (
        <div className="card">
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
                <button className="btn-favorite" onClick={addToFavorites}>
                    <FontAwesomeIcon icon={faHeart} /> Ajouter aux favoris
                </button>
                <button className="btn-cart" onClick={() => addToCart(toilet)}>
                    <FontAwesomeIcon icon={faCartPlus} /> Ajouter au panier
                </button>
            </div>
        </div>
    );
};

export default ToiletCard;
