import React from 'react';

import ProductCard from '../../components/ProductCard';
import ProductCard2 from '../../components/ProductCard2';
import Text from '../../components/Text';
import shopMen from '../../assets/images/him.jpg'
import shopWomen from '../../assets/images/her.jpg'
const CardLayout = ({ cardItems }) => {

    return (
        <>
            <div className='flex flex-wrap justify-around items-center gap-2 p-3 sm:flex-nowrap'>
                {cardItems.map(({ image, text, link }, index) => {
                    return <ProductCard key={index} image={image} text={text} link={link} even={index % 2 === 0} />
                })}
            </div>
            <div className=" w-[100%] text-center mt-12">
                <Text variant="3xl" className="text-center mb-5 font-bold" >Shop by Recipient</Text>
                <div className="flex justify-center gap-10 flex-wrap">
                    <ProductCard image={shopMen} text={"Him"} link={"/products?category=men"} even={true} className={'w-[35%]'} />
                    <ProductCard image={shopWomen} text={"Her"} link={"/products?category=women"} even={false} className={'w-[35%]'} />
                </div>
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