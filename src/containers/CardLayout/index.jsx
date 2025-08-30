import React from 'react';

import ProductCard from '../../components/ProductCard';
import ProductCard2 from '../../components/ProductCard2';
import Text from '../../components/Text';

const CardLayout = ({ cardItems }) => {

    return (
        <>
            <div className='flex flex-wrap justify-around items-center gap-2 p-3 sm:flex-nowrap'>
                {cardItems.map(({ image, text, link }, index) => {
                    return <ProductCard key={index} image={image} text={text} link={link} even={index % 2 === 0} />
                })}
            </div>
            <div className='my-14'>
                <Text variant='3xl' className='text-center mb-5 font-bold'>Trending Now</Text>

                <div className='flex flex-wrap justify-around items-center gap-2 p-3 sm:flex-nowrap'>
                    {cardItems.map(({ image, text, link, price, category, in_stock }, index) => {
                        return <ProductCard2 key={index} image={image} in_stock={in_stock} text={text} link={link} price={price} category={category} />
                    })}
                </div>
            </div>
        </>
    )
}

export default CardLayout