import React from 'react';

const CartModal = ({ isOpen, cartItems, onClose }) => {
    // Fonction pour regrouper les articles similaires
    const getGroupedItems = (items) => {
        const groupedItems = items.reduce((acc, item) => {
            const existingItem = acc.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                acc.push({ ...item, quantity: 1 });
            }
            return acc;
        }, []);
        return groupedItems;
    };

    const groupedItems = getGroupedItems(cartItems);

    return (
        <>
            {isOpen && (
                <div className="cart-modal">
                    <div className="cart-modal-content">
                        <span className="close-button" onClick={onClose}>&times;</span>
                        <h3>Récapitulatif du Panier</h3>
                        <ul>
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
