import React from 'react';
import { Link } from 'react-router-dom'

const ProductCard2 = ({ image, text, link, category, price }) => {
    return (
        <Link to={link} className="relative w-64 h-96 overflow-hidden cursor-pointer border border-1 border-gray-800 bg-white">
            <img
                src={image}
                alt={text}
                className="w-full h-[80%] object-cover m-0"
            />
            <div className="border border-b-0 border-l-0 border-r-0 border-gray-800 text-center ">
                <p className='text-gray-900 font-bold text-lg'>{text}</p>
                <p className='text-sm font-normal text-gray-700'>{category}</p>
                <p className='text-blue-800 font-bold'>₹ {price}</p>
            </div>
        </Link>
    );
};

export default ProductCard2;
