import React from 'react';
import './ProductCard.css';

// Définition des props du composant ProductCard
function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      {/* Affichage de l'image du produit */}
      <img src={image} alt={title} className="product-image" /> 
      <h2 className="product-title">{title}</h2> {/* Affichage du titre du produit */}
      <p className="product-price">{price} €</p> {/* Affichage du prix du produit */}
    </div>
  );
}

export default ProductCard;
