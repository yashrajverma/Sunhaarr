import React from 'react'
import ProductCard2 from '../../components/ProductCard2'
import { cardItems } from '../../constants'

const Wishlist = () => {
    return (
        <div>
            <h1 className='text-center text-3xl mb-5 pb-2 mt-12 font-bold'>My Wishlist</h1>
            <div className="mt-6 mb-4 lg:mt-0 lg:col-span-2 xl:col-span-3 mx-auto w-[70vw]">
                <div className="h-auto lg:h-full w-full">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-start gap-2">
                        {cardItems.map(({ text, category, link, image, price }, index) => (
                            <ProductCard2
                                key={index}
                                text={text}
                                category={category}
                                link={link}
                                price={price}
                                image={image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist