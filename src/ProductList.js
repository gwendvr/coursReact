import React from 'react';
import ProductCard from './ProductCard';
import wc1 from './img/wc.png';
import wc2 from './img/let.png';
import wc3 from './img/images.png';
import wc4 from './img/toi.png';
import wc5 from './img/toilet.png';
import wc6 from './img/wc2.png';

// Création d'une liste de produits factices
const products = [
  {
    id: 1,
    title: 'Produit 1',
    price: 10.0,
    image: wc1
  },
  {
    id: 2,
    title: 'Produit 2',
    price: 20.0,
    image: wc2
  },
  {
    id: 3,
    title: 'Produit 3',
    price: 30.0,
    image: wc3
  },
  {
    id: 4,
    title: 'Produit 4',
    price: 10.0,
    image: wc4
  },
  {
    id: 5,
    title: 'Produit 5',
    price: 20.0,
    image: wc5
  },
  {
    id: 6,
    title: 'Produit 6',
    price: 30.0,
    image: wc6
  }
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        // Pour chaque produit dans la liste products, on crée un ProductCard
        <ProductCard
          key={product.id} // Chaque élément doit avoir un id unique pour aider React à identifier les éléments mis à jour
          title={product.title} // Passe le titre du produit comme prop au composant ProductCard
          price={product.price} // Passe le prix du produit comme prop au composant ProductCard
          image={product.image} // Passe l'image du produit comme prop au composant ProductCard
        />
      ))}
    </div>
  );
}

export default ProductList;
