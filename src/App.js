import React, { useState } from 'react';
import './App.css';
import ToiletList from './components/ToiletList';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal'; // Importez le composant CartModal

function App() {
    const [cartItems, setCartItems] = useState([]); // État pour les articles dans le panier
    const [isCartModalOpen, setIsCartModalOpen] = useState(false); // État pour afficher/masquer la modal

    const addToCart = (toilet) => {
        const updatedCart = [...cartItems, toilet];
        setCartItems(updatedCart);
    };

    const openCartModal = () => {
        setIsCartModalOpen(true);
    };

    const closeCartModal = () => {
        setIsCartModalOpen(false);
    };

    return (
        <div className="App">
            <div className="container">
                <h1>Bienvenue sur notre site de vente de toilettes</h1>
                <CartButton itemCount={cartItems.length} onClick={openCartModal} />
                <ToiletList addToCart={addToCart} />
                <CartModal isOpen={isCartModalOpen} cartItems={cartItems} onClose={closeCartModal} />
            </div>
        </div>
    );
}

export default App;
