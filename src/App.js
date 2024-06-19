import React from 'react';
import './App.css';
import ProductList from './ProductList'; // Importation du composant ProductList

function App() {
  return (
    <div className="App">
      {/* Conteneur principal de l'application */}
      <h1>Catalogue de Produits</h1> 
      <ProductList /> {/* Affiche la liste des produits */}
    </div>
  );
}

export default App;
