import React from 'react'
import ProductCard2 from '../../components/ProductCard2'
import { connect } from 'react-redux'

const Wishlist = ({ products }) => {
    return (
        <div>
            <h1 className='text-center text-3xl mb-5 pb-2 mt-12 font-bold'>My Wishlist</h1>
            <div className="mt-6 mb-4 lg:mt-0 lg:col-span-2 xl:col-span-3 mx-auto w-[70vw]">
                <div className="h-auto lg:h-full w-full">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-start gap-2">
                        {products.map(({ id, name, category, link, images, price, description, in_stock }, index) => (
                            <ProductCard2
                                key={id}
                                text={name}
                                category={category}
                                link={`/product/${id}`}
                                price={price}
                                image={images}
                                description={description}
                                in_stock={in_stock}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ products }) => {
    return products
}

export default connect(mapStateToProps, null)(Wishlist)