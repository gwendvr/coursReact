import React, { useState } from 'react';
import './App.css';
import ToiletList from './components/ToiletList';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal';

function App() {
    // Utilisation de l'état pour stocker les articles dans le panier
    // `cartItems` contient la liste des articles ajoutés au panier
    // `setCartItems` est une fonction qui permet de mettre à jour cette liste
    const [cartItems, setCartItems] = useState([]); 

    // Utilisation de l'état pour contrôler l'affichage de la modal du panier
    // `isCartModalOpen` est un booléen qui indique si la modal est ouverte (true) ou fermée (false)
    // `setIsCartModalOpen` est une fonction qui permet de changer cet état
    const [isCartModalOpen, setIsCartModalOpen] = useState(false); 

    // Utilisation de l'état pour gérer le terme de recherche entré dans la barre de recherche
    // `searchTerm` contient le texte actuel de la barre de recherche
    // `setSearchTerm` est une fonction qui permet de mettre à jour ce texte
    const [searchTerm, setSearchTerm] = useState(''); 

    // Utilisation de l'état pour activer ou désactiver le filtre des articles de luxe
    // `filterLuxe` est un booléen qui indique si le filtre luxe est activé (true) ou désactivé (false)
    // `setFilterLuxe` est une fonction qui permet de changer cet état
    const [filterLuxe, setFilterLuxe] = useState(false); 

    // Fonction pour ajouter un article au panier
    const addToCart = (toilet) => {
        // Vérifie si l'article est déjà dans le panier
        const itemInCart = cartItems.find(item => item.id === toilet.id);
        if (itemInCart) {
            // Incrémente la quantité si l'article est déjà dans le panier
            setCartItems(cartItems.map(item =>
                item.id === toilet.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            // Ajoute un nouvel article avec une quantité initiale de 1
            setCartItems([...cartItems, { ...toilet, quantity: 1 }]);
        }
    };

     // Fonction pour augmenter la quantité d'un article dans le panier
     const increaseQuantity = (item) => {
        setCartItems(cartItems.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ));
    };

    // Fonction pour diminuer la quantité d'un article dans le panier
    const decreaseQuantity = (item) => {
        setCartItems(cartItems.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        ).filter(cartItem => cartItem.quantity > 0));
    };

    // Fonction pour ouvrir la modal du panier
    const openCartModal = () => {
        setIsCartModalOpen(true);
    };

    // Fonction pour fermer la modal du panier
    const closeCartModal = () => {
        setIsCartModalOpen(false);
    };

    // Fonction pour basculer le filtre luxe
    const toggleLuxeFilter = () => {
        setFilterLuxe(!filterLuxe);
    };


    return (
        <div className="App">
            <div className="container">
                <h1>Bienvenue sur notre site de vente de toilettes</h1>
                <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Met à jour l'état de la barre de recherche
                />
                <button onClick={toggleLuxeFilter}>
                    {filterLuxe ? 'Afficher toutes les toilettes' : 'Toilettes chères' /*Change le texte du bouton selon l'état du filtre luxe*/ }
                </button>
                <CartButton itemCount={cartItems.length} onClick={openCartModal} // Affiche le nombre total d'articles dans le panier et ouvre la modal du panier quand cliqué
                />
                <ToiletList addToCart={addToCart} searchTerm={searchTerm} filterLuxe={filterLuxe}  // Passe la fonction d'ajout au panier, le terme de recherche et le filtre luxe pour afficher les toilettes correspondantes
                />
                <CartModal
                    // Affiche la modal du panier avec les articles ajoutés et permet d'ajuster les quantités ou de fermer la modal
                    isOpen={isCartModalOpen}
                    cartItems={cartItems}
                    onClose={closeCartModal}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                />
            </div>
        </div>
    );
}

export default App;
