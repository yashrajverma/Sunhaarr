import React, { memo } from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../../routines';

const AdminProductCard = ({ id, image, text, link, category, price, description, in_stock, deleteProduct }) => {

    return (
        <div aria-disabled={!in_stock}
            className={`${!in_stock && 'border-gray-200 bg-gray-200 cursor-not-allowed'} 
                relative w-96 md:w-64 h-96 overflow-hidden cursor-pointer border border-1 border-gray-800 bg-white`}>
            <img
                src={Array.isArray(image) && image.length > 0 ? image[0].src : image}
                alt={text}
                className="w-full h-[80%] object-cover m-0"
            />

            <div className="border border-b-0 border-l-0 border-r-0 border-gray-800 text-center ">
                <p className='text-gray-900 font-bold text-lg'>{text}</p>
                <div className='flex justify-around mt-2 gap-2'>
                    <button className={' text-sm bg-accentGold p-3'} onClick={() => { }}>
                        Edit
                    </button>
                    <button className={' text-sm bg-red-600 p-3 text-white'} onClick={() => {
                        deleteProduct(id);
                    }}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
};

export default connect(null, { deleteProduct })(memo(AdminProductCard));
