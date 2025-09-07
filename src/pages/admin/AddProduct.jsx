import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { addProduct } from '../../routines';
import { connect } from 'react-redux';
import { categories } from '../../constants';

const PRODUCT_CATEGORIES = categories.filter(cat => cat.type === 'category' || cat.type === 'purity').map(cat => cat.value);
const PRODUCT_METALS = categories.filter(cat => cat.type === 'metal').map(cat => cat.value);
const PRODUCT_OCCASIONS = categories.filter(cat => cat.type === 'occasions').map(cat => cat.value);

const AddProduct = ({ addProduct }) => {

    const [productData, setProductData] = useState({
        name: '',
        price: '',
        description: '',
        quantity: '',
        category: '',
        images: [{ name: '', src: "", alt: "" }],
        metal: '',
        occasion: '',
        weight: 0,
        details: [{ item: [], name: '' }]
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setProductData(prev => ({
            ...prev,
            images: files.map(file => ({
                name: file.name,
                src: URL.createObjectURL(file),
                alt: ''
            }))
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(productData).forEach(key => {
            if (key === 'images') {
                productData.images.forEach(image => {
                    formData.append('images', image);
                });
            } else {
                formData.append(key, productData[key]);
            }
        });

        // TODO: Implement API call to save product
        try {
            // Add API call here
            addProduct(productData)
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Add New Product</h2>

            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={productData.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={productData.price}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={productData.description}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            rows="4"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 text-sm font-bold mb-2 flex justify-between items-center">
                            Details
                            <button
                                type="button"
                                className='font-bold text-md py-1 px-2 bg-primaryNavy text-white'
                                aria-describedby='Add Details Button'
                                aria-description='Add more details about the product'
                                onClick={() => {
                                    setProductData(prevState => ({
                                        ...prevState,
                                        details: [...prevState.details, { item: '', name: '' }]
                                    }))
                                }}
                            >+</button>
                        </label>
                        {productData.details.map((detail, index) => (
                            <div key={index} className="border-2 p-4 mb-2 space-y-2">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-1">
                                        Detail Name
                                    </label>
                                    <input
                                        type="text"
                                        value={detail.name}
                                        onChange={(e) => {
                                            const newDetails = [...productData.details];
                                            newDetails[index].name = e.target.value;
                                            setProductData(prevState => ({
                                                ...prevState,
                                                details: newDetails
                                            }));
                                        }}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-1">
                                        Detail Value
                                    </label>
                                    <textarea
                                        value={detail.item.join('\n')}
                                        onChange={(e) => {
                                            const newDetails = [...productData.details];
                                            newDetails[index].item = e.target.value.split('\n');

                                            setProductData(prevState => ({
                                                ...prevState,
                                                details: newDetails
                                            }));
                                        }}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                {productData.details.length > 1 && index > 0 && <button
                                    type="button"
                                    className="text-red-600 text-sm"
                                    onClick={() => {
                                        const newDetails = productData.details.filter((_, i) => i !== index);
                                        setProductData(prevState => ({
                                            ...prevState,
                                            details: newDetails
                                        }));
                                    }}
                                >
                                    Remove
                                </button>}
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Quantity
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            value={productData.quantity}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Category
                        </label>
                        <select
                            name="category"
                            value={productData.category}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Select Category</option>
                            {PRODUCT_CATEGORIES.map(category => (
                                <option key={category} value={category}>
                                    {category.replace('_', ' ').toUpperCase()}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='grid grid-cols-2 gap-1'>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Weight
                            </label>
                            <input
                                type="number"
                                name="weight"
                                value={productData.weight}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Metal
                            </label>
                            <select
                                name="metal"
                                value={productData.metal}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            >
                                <option value="">Select metal</option>
                                {PRODUCT_METALS.map(metal => (
                                    <option key={metal} value={metal}>
                                        {metal.replace('_', ' ').toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                occasion
                            </label>
                            <select
                                name="occasion"
                                value={productData.occasion}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            >
                                <option value="">Select occasion</option>
                                {PRODUCT_OCCASIONS.map(occasion => (
                                    <option key={occasion} value={occasion}>
                                        {occasion.replace('_', ' ').toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Product Images
                        </label>
                        <input
                            type="file"
                            name="images"
                            onChange={handleImageChange}
                            className="w-full p-2 border rounded"
                            multiple
                            accept="image/*"
                            required
                        />
                    </div>

                    <div className="mt-6">
                        <Button type="submit">Add Product</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = { addProduct };

export default connect(null, mapDispatchToProps)(AddProduct);
