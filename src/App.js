import React, { useState } from 'react';
import './App.css';
import ToiletList from './components/ToiletList';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal';

function App() {
    const [cartItems, setCartItems] = useState([]); // État pour les articles dans le panier
    const [isCartModalOpen, setIsCartModalOpen] = useState(false); // État pour afficher/masquer la modal

    // Fonction pour ajouter un article au panier
    const addToCart = (toilet) => {
        const updatedCart = [...cartItems, toilet];
        setCartItems(updatedCart);
    };

    // Fonction pour ouvrir la modal du panier
    const openCartModal = () => {
        setIsCartModalOpen(true);
    };

    // Fonction pour fermer la modal du panier
    const closeCartModal = () => {
        setIsCartModalOpen(false);
    };

    return (
        <div className="App">
            <div className="container">
                <h1>Bienvenue sur notre site de vente de toilettes</h1>
                <CartButton itemCount={cartItems.length} onClick={openCartModal} /> {/* Bouton du panier avec le nombre d'articles */}
                <ToiletList addToCart={addToCart} /> {/* Liste des toilettes avec la fonction d'ajout au panier */}
                <CartModal isOpen={isCartModalOpen} cartItems={cartItems} onClose={closeCartModal} /> {/* Modal du panier */}
            </div>
        </div>
    );
}

export default App;
