import React from 'react';
import ToiletCard from './ToiletCard';
import toiletsData from '../data/toiletsData'; // Assurez-vous de créer ce fichier avec les données

// Composant fonctionnel ToiletList qui accepte les props 'addToCart', 'searchTerm' et 'filterLuxe'
const ToiletList = ({ addToCart, searchTerm, filterLuxe }) => {
    // Filtrer les articles en fonction du terme de recherche et du filtre luxe
    const filteredToilets = toiletsData.filter(toilet => 
        toilet.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!filterLuxe || toilet.isLuxe)
    );

    return (
        <div className="toilet-list">
            {filteredToilets.map(toilet => (
                <ToiletCard key={toilet.id} toilet={toilet} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ToiletList;
