import React from 'react';

import ProductCard from '../../components/ProductCard';
import ProductCard2 from '../../components/ProductCard2';

const CardLayout = ({ cardItems }) => {

    return (
        <>
            <div className='flex justify-around items-center gap-2 p-3'>
                {cardItems.map(({ image, text, link }, index) => {
                    return <ProductCard image={image} text={text} link={link} even={index % 2 == 0} />
                })}
            </div>
            <div className='my-14'>
                <h1 className='text-center text-3xl mb-5'>Trending Now</h1>

                <div className='flex justify-around items-center gap-2 p-3'>
                    {cardItems.map(({ image, text, link, price, category }, index) => {
                        return <ProductCard2 image={image} text={text} link={link} price={price} category={category} />
                    })}
                </div>
            </div>

        </>
    )
}

export default CardLayout