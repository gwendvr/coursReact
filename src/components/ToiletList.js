import React from 'react';
import ToiletCard from './ToiletCard';
import toiletsData from '../data/toiletsData';

const ToiletList = () => {
    return (
        <div className="toilet-list">
            {toiletsData.map(toilet => ( /* Utilisation de la méthode map pour parcourir chaque élément dans toiletsData */
                <ToiletCard key={toilet.id} toilet={toilet} /> /* Rend chaque toilette sous forme de composant ToiletCard avec une clé unique */
            ))}
        </div>
    );
};

export default ToiletList;
