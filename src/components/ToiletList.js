import React from 'react';
import ToiletCard from './ToiletCard';
import toiletsData from '../data/toiletsData'; // Importez les données des toilettes

// Composant fonctionnel ToiletList qui accepte la prop 'addToCart'
const ToiletList = ({ addToCart }) => {
    return (
        <div className="toilet-list">
            {/* Boucle sur chaque élément des données des toilettes et rend une ToiletCard pour chaque toilette */}
            {toiletsData.map(toilet => (
                // Chaque ToiletCard reçoit les données de la toilette et la fonction 'addToCart' en props
                <ToiletCard key={toilet.id} toilet={toilet} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ToiletList;
