import React, { useState } from 'react';
import './App.css';
import ToiletList from './components/ToiletList';
import CartButton from './components/CartButton';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (toilet) => {
    // Logique pour ajouter au panier
    setCartItemCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Bienvenue sur notre site de vente de toilettes</h1>
        <CartButton itemCount={cartItemCount} />
        <ToiletList addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
