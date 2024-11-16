import React from 'react';
import { Link } from 'react-router-dom'

const ProductCard = ({ image, text, link, even }) => {
    return (
        <Link to={link} className="relative w-96 md:w-64 h-96 overflow-hidden shadow-lg cursor-pointer">
            <img
                src={image}
                alt={text}
                className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${even ? 'bg-gradient-to-t from-softPeach to-transparent' : 'bg-gradient-to-t from-primaryNavy to-transparent'} `}>
                <div className={`absolute bottom-4 left-4  ${even ? 'text-primaryNavy' : 'text-softPeach'}  text-xl font-semibold`}>
                    {text}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
