
import { useEffect, useState } from 'react'
import { Disclosure, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import Icon from '../Icon'
import Button from '../Button'
import Skeleton from '../Skeleton'
import { connect } from 'react-redux'
import { addCartItem } from '../../routines'
import extractArraysFromText from '../../utils/textToArray'
import { Navigate } from 'react-router-dom'

const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                },
            ],
            sections: [
                [
                    {
                        id: 'shoes',
                        name: 'Shoes & Accessories',
                        items: [
                            { name: 'Sneakers', href: '#' },
                            { name: 'Boots', href: '#' },
                            { name: 'Flats', href: '#' },
                            { name: 'Sandals', href: '#' },
                            { name: 'Heels', href: '#' },
                            { name: 'Socks', href: '#' },
                        ],
                    },
                    {
                        id: 'collection',
                        name: 'Shop Collection',
                        items: [
                            { name: 'Everything', href: '#' },
                            { name: 'Core', href: '#' },
                            { name: 'New Arrivals', href: '#' },
                            { name: 'Sale', href: '#' },
                            { name: 'Accessories', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'clothing',
                        name: 'All Clothing',
                        items: [
                            { name: 'Basic Tees', href: '#' },
                            { name: 'Artwork Tees', href: '#' },
                            { name: 'Tops', href: '#' },
                            { name: 'Bottoms', href: '#' },
                            { name: 'Swimwear', href: '#' },
                            { name: 'Underwear', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'All Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Significant Other', href: '#' },
                        ],
                    },
                ],
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
                    imageAlt:
                        'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
                },
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                [
                    {
                        id: 'shoes',
                        name: 'Shoes & Accessories',
                        items: [
                            { name: 'Sneakers', href: '#' },
                            { name: 'Boots', href: '#' },
                            { name: 'Sandals', href: '#' },
                            { name: 'Socks', href: '#' },
                        ],
                    },
                    {
                        id: 'collection',
                        name: 'Shop Collection',
                        items: [
                            { name: 'Everything', href: '#' },
                            { name: 'Core', href: '#' },
                            { name: 'New Arrivals', href: '#' },
                            { name: 'Sale', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'clothing',
                        name: 'All Clothing',
                        items: [
                            { name: 'Basic Tees', href: '#' },
                            { name: 'Artwork Tees', href: '#' },
                            { name: 'Pants', href: '#' },
                            { name: 'Hoodies', href: '#' },
                            { name: 'Swimsuits', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'All Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                        ],
                    },
                ],
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}
const product = {
    name: 'Zip Tote Basket',
    price: '$140',
    rating: 4,
    images: [
        {
            id: 1,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        // More images...
    ],
    colors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
        { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
    details: [
        {
            name: 'Features',
            items: [
                'Multiple strap configurations',
                'Spacious interior with top zip',
                'Leather handle and tabs',
                'Interior dividers',
                'Stainless strap loops',
                'Double stitched construction',
                'Water-resistant',
            ],
        },
        // More sections...
    ],
}
const relatedProducts = [
    {
        id: 1,
        name: 'Zip Tote Basket',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
    },
    // More products...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Product({ product, addCartItem, cart }) {
    const [open, setOpen] = useState(false)
    const [selectedColor, setSelectedColor] = useState({});
    const [productImages, setProductImages] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const [productColors, setProductColors] = useState([]);
    const [productQuantity, setProductQuantity] = useState(1);


    useEffect(() => {
        if (product) {
            // Set selected color if colors are available
            if (product.colors?.length) {
                setSelectedColor(product.colors[0]);
            }

            // Set product images if images are available
            if (product.images?.length) {
                setProductImages(product.images);
            }

            // Set product details if details are available
            if (product.details?.length) {
                setProductDetails(product.details);
            }

            // Set product colors if colors are available
            if (product.colors?.length) {
                setProductColors(product.colors);
            }
        }
    }, [product]);


    const addItemToCart = (productId) => {
        addCartItem({ productId, quantity: 1 });
        <Navigate to={'/cart'} />
    }

    return (
        product ?
            <div className="bg-white">
                <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto lg:max-w-none">
                        {/* Product */}
                        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                            {/* Image gallery */}
                            <Tab.Group as="div" className="flex flex-col-reverse">
                                {/* Image selector */}
                                <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                                    <Tab.List className="grid grid-cols-4 gap-6">
                                        {productImages.map((image) => (
                                            <Tab
                                                key={image.id}
                                                className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className="sr-only">{image.name}</span>
                                                        <span className="absolute inset-0 rounded-md overflow-hidden">
                                                            <img src={image.src} alt="" className="w-full h-full object-center object-cover" />
                                                        </span>
                                                        <span
                                                            className={classNames(
                                                                selected ? 'ring-accentGold' : 'ring-transparent',
                                                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </>
                                                )}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>

                                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                                    {productImages.map((image) => (
                                        <Tab.Panel key={image.id}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-center object-cover sm:rounded-lg"
                                            />
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            {/* Product info */}
                            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
                                <div className="max-w-xs">
                                    <div for="quantity-input" className="block my-2 text-sm font-normal text-gray-900 dark:text-primaryNavy">Quantity</div>
                                    <div className="relative flex items-center max-w-[8rem]">
                                        <button onClick={() => { productQuantity >= 1 && setProductQuantity(productQuantity - 1) }} type="button" id="decrement-button" className="   dark:border-primaryNavy hover:bg-gray-200 border border-gray-300 p-2 h-11 ">
                                            <Icon iconName='minus' />
                                        </button>
                                        <input value={productQuantity} onChange={(e) => { setProductQuantity(e.target.value) }} type="text" id="quantity-input" className=" font-semibold bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-primaryNavy text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-primaryNavy dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        <button onClick={() => { setProductQuantity(productQuantity + 1) }} type="button" id="increment-button" className="   dark:border-primaryNavy hover:bg-gray-200 border border-gray-300 p-2 h-11 ">
                                            <Icon iconName='plus' />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-3xl text-gray-900">Rs. {product.price}</p>
                                </div>

                                {/* Reviews */}
                                <div className="mt-3">
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3].map((rating) => (
                                                <Icon
                                                    variant='solid'
                                                    iconName='star'
                                                    key={rating}
                                                    className={classNames(
                                                        product.rating > rating ? 'text-accentGold' : 'text-gray-300',
                                                        'h-5 w-5 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="sr-only">{product.rating} out of 5 stars</p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-gray-500 mb-1">Description</h3>

                                    <div
                                        className="text-base text-gray-700 space-y-6"
                                        dangerouslySetInnerHTML={{ __html: product.description }}
                                    />
                                </div>

                                <div className="mt-6">
                                    {/* Colors */}
                                    <div>
                                        <h3 className="text-sm text-gray-600">Color</h3>

                                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                            <div className="flex items-center space-x-3">
                                                {productColors.map((color) => (
                                                    <RadioGroup.Option
                                                        key={color.name}
                                                        value={color}
                                                        className={({ active, checked }) =>
                                                            classNames(
                                                                color.selectedColor,
                                                                active && checked ? 'ring ring-offset-1' : '',
                                                                !active && checked ? 'ring-2' : '',
                                                                '-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none'
                                                            )
                                                        }
                                                    >
                                                        <RadioGroup.Label as="p" className="sr-only">
                                                            {color.name}
                                                        </RadioGroup.Label>
                                                        <span
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                color.bgColor,
                                                                'h-8 w-8 border border-black border-opacity-10 '
                                                            )}
                                                        />
                                                    </RadioGroup.Option>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    <div className="mt-10 flex sm:flex-col1">
                                        <Button type="button" onClick={() => { addItemToCart(product.id) }} disabled={productQuantity < 1}>Add to Bag</Button>

                                        <button
                                            type="button"
                                            className="ml-4 py-3 px-3 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                        >
                                            <Icon iconName='heart' className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                            <span className="sr-only">Add to favorites</span>
                                        </button>
                                    </div>
                                </div>

                                {productDetails.length > 0 && productDetails[0].item != null &&
                                    <section aria-labelledby="details-heading" className="mt-12">
                                        <h2 id="details-heading" className="font-normal">
                                            Additional Details
                                        </h2>

                                        <div className="border-t divide-y divide-gray-200">
                                            {productDetails.map((detail) => (
                                                detail.item != null &&
                                                <Disclosure as="div" key={detail.name}>
                                                    {({ open }) => (
                                                        <>
                                                            <h3>
                                                                <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                                                                    <span
                                                                        className={classNames(
                                                                            open ? 'text-primaryNavy' : 'text-gray-900',
                                                                            'text-sm font-medium'
                                                                        )}
                                                                    >
                                                                        {detail.name}
                                                                    </span>
                                                                    <span className="ml-6 flex items-center">
                                                                        {open ? (
                                                                            <Icon iconName='minus'
                                                                                className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                                                aria-hidden="true"
                                                                            />
                                                                        ) : (
                                                                            <Icon
                                                                                iconName='plus'
                                                                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                                                aria-hidden="true"
                                                                            />
                                                                        )}
                                                                    </span>
                                                                </Disclosure.Button>
                                                            </h3>
                                                            <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                                                                <ul role="list">
                                                                    {extractArraysFromText(detail.item).map((item) => (
                                                                        <li key={item}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            ))}
                                        </div>
                                    </section>}
                            </div>
                        </div>

                        <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
                            <h2 id="related-heading" className="text-xl font-bold text-gray-900">
                                Customers also bought
                            </h2>

                            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                {relatedProducts.map((product) => (
                                    <div key={product.id}>
                                        <div className="relative">
                                            <div className="relative w-full h-72 rounded-lg overflow-hidden">
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="relative mt-4">
                                                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                            </div>
                                            <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                                />
                                                <p className="relative text-lg font-semibold text-white">{product.price}</p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <Button
                                                href={product.href}
                                                className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                                                onClick={() => { addItemToCart(product.id) }}
                                            >
                                                Add to bag<span className="sr-only">, {product.name}</span>
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div> : <Skeleton></Skeleton>
    )
}

const mapStateToProps = ({ cart }) => {
    return cart
}

const mapDispatchToProps = {
    addCartItem
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)