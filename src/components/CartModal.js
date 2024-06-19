import React from 'react';

// Composant fonctionnel CartModal qui accepte les props 'isOpen', 'cartItems' et 'onClose'
const CartModal = ({ isOpen, cartItems, onClose }) => {
    // Fonction pour regrouper les articles similaires dans le panier
    const getGroupedItems = (items) => {
        // Utilisation de reduce pour regrouper les articles par id
        const groupedItems = items.reduce((acc, item) => {
            // Recherche d'un article existant dans l'accumulateur
            const existingItem = acc.find(i => i.id === item.id);
            if (existingItem) {
                // Si l'article existe déjà, incrémentation de sa quantité
                existingItem.quantity += 1;
            } else {
                // Sinon, ajout de l'article avec une quantité initiale de 1
                acc.push({ ...item, quantity: 1 });
            }
            return acc;
        }, []);
        return groupedItems;
    };

    // Regroupement des articles du panier
    const groupedItems = getGroupedItems(cartItems);

    return (
        <>
            {isOpen && (
                <div className="cart-modal">
                    <div className="cart-modal-content">
                        {/* Bouton de fermeture de la modal */}
                        <span className="close-button" onClick={onClose}>&times;</span>
                        <h3>Récapitulatif du Panier</h3>
                        <ul>
                            {/* Affichage des articles regroupés dans le panier */}
                            {groupedItems.map(item => (
                                <li key={item.id}>
                                    <p>{item.title} - Quantité : {item.quantity}</p>
                                    <p>Prix : {item.price} €</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartModal;
