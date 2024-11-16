import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { AppCarousel } from '../Carousel/AppCarousel';

const ProductCard2 = ({ image, text, link, category, price, description, in_stock }) => {
    const [showCarousel, setShowCarousel] = useState(false);
    const [carouselImages, setCarouselImages] = useState([])
    useEffect(() => {
        if (Array.isArray(image)) {
            setCarouselImages(image.map((item) => { return item.src }))
        }
    }, [])
    return (
        <Link to={link} aria-disabled={!in_stock} className={`${!in_stock && 'border-gray-200 bg-gray-200 cursor-not-allowed'} relative w-96 md:w-64 h-96 overflow-hidden cursor-pointer border border-1 border-gray-800 bg-white`}
            onMouseEnter={() => { (Array.isArray(image) && image.length >= 1) ? setShowCarousel(true) : null }}
            onMouseLeave={() => { setShowCarousel(false) }}
        >
            {!showCarousel ? <img
                src={image.length > 0 ? image[0].src : image}
                alt={text}
                className="w-full h-[80%] object-cover m-0"
            /> :
                <AppCarousel className='w-[100%]' images={carouselImages} />
            }
            <div className="border border-b-0 border-l-0 border-r-0 border-gray-800 text-center ">
                <p className='text-gray-900 font-bold text-lg'>{text}</p>
                <p className='text-sm font-normal text-gray-700'>{category.split("_").join(" ").toUpperCase()}</p>
                <p className='text-blue-800 font-bold'>₹ {price}</p>
            </div>
        </Link>
    );
};

export default memo(ProductCard2);
