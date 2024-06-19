import React from 'react';
import ToiletCard from './ToiletCard';
import toiletsData from '../data/toiletsData'; // Assurez-vous de créer ce fichier avec les données

const ToiletList = () => {
    return (
        <div className="toilet-list">
            {toiletsData.map(toilet => (
                <ToiletCard key={toilet.id} toilet={toilet} />
            ))}
        </div>
    );
};

export default ToiletList;
