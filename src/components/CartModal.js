const CartModal = ({ isOpen, cartItems, onClose, increaseQuantity, decreaseQuantity }) => {
    return (
        <>
            {isOpen && (  // Vérifie si isOpen est vrai pour afficher la modal
                <div className="cart-modal">
                    <div className="cart-modal-content">
                        <span className="close-button" onClick={onClose}>&times;</span>  {/* Bouton pour fermer la modal */}
                        <h3>Récapitulatif du Panier</h3>
                        <ul>
                            {cartItems.map(item => (  // Map chaque article dans cartItems pour les afficher dans une liste
                                <li key={item.id}>
                                    <p>{item.title}</p>
                                    <p>Prix : {item.price} €</p>
                                    <p>Quantité : {item.quantity}</p>
                                    <button onClick={() => increaseQuantity(item)}>+</button>  {/* Bouton pour augmenter la quantité de l'article */}
                                    <button onClick={() => decreaseQuantity(item)}>-</button>  {/* Bouton pour diminuer la quantité de l'article */}
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
