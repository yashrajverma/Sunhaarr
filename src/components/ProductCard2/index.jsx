import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { AppCarousel } from '../Carousel/AppCarousel';

const ProductCard2 = ({ id, image, text, link, category, price, description, in_stock }) => {
    const [showCarousel, setShowCarousel] = useState(false);
    const [carouselImages, setCarouselImages] = useState([])
    useEffect(() => {
        if (Array.isArray(image)) {
            setCarouselImages(image.map((item) => { return item.src }))
        }
    }, [])
    return (
        <Link to={link} aria-disabled={!in_stock} className={`${!in_stock && 'flex flex-col justify-between items-start  cursor-not-allowed'} relative w-96 md:w-64 h-96 overflow-hidden cursor-pointer `}
            onMouseEnter={() => { (Array.isArray(image) && image.length >= 2) ? setShowCarousel(true) : null }}
            onMouseLeave={() => { setShowCarousel(false) }}
        >
            <div className='h-[85%]'>
                {!showCarousel ? <img
                    src={Array.isArray(image) && image.length > 0 ? image[0].src : image}
                    alt={text}
                    className="w-full h-full object-cover m-0"
                /> :
                    <AppCarousel className='w-[100%] h-full' images={carouselImages} />
                }

            </div>

            <div className="h-[15%] text-left px-2 my-auto">

                <p className='text-gray-900 font-bold text-md'>{text}</p>
                {/* <p className='text-sm font-normal text-gray-700'>{category.split("_").join(" ").toUpperCase()}</p> */}
                <p className='text-sm font-normal text-gray-700'>₹ {price}</p>
            </div>
        </Link>
    );
};

export default memo(ProductCard2);
