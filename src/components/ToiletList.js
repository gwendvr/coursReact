import React from 'react';
import ToiletCard from './ToiletCard';
import toiletsData from '../data/toiletsData';

const ToiletList = ({ addToCart }) => {
    return (
        <div className="toilet-list">
            {toiletsData.map(toilet => (
                <ToiletCard key={toilet.id} toilet={toilet} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ToiletList;
