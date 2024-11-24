import { connect } from "react-redux"
import Button from "../../components/Button"
import Icon from "../../components/Icon"
import { deleteCartItem, getCartItem } from "../../routines"
import { useEffect } from "react";
import emptyCart from '../../assets/images/emptyCart.svg'

function Cart({ getCartItem, products, cart, deleteCartItem }) {
    useEffect(() => {
        getCartItem()
    }, []);

    if (products.length <= 0 && cart) {

        return (
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-5">No Items In Cart</h1>
                <img src={emptyCart} alt={'No Items'} className="w-56 h-56  md:w-72 md:h-72" />
                <Button href={'/products'} className={'w-auto'}>Shop Now</Button>
            </div>)
    };

    const deleteCart = (id) => {
        deleteCartItem(id)
    }
    return (
        <>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-extrabold tracking-tight text-primaryNavy sm:text-4xl">Shopping Cart</h1>
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>

                            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                                {products.map((product, productIdx) => (
                                    <li key={product.id} className="flex py-6 sm:py-10">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                                            />
                                        </div>

                                        <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm">
                                                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                                                                {product.name}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                    <div className="mt-1 flex text-sm">
                                                        <p className="text-gray-500">{product.color}</p>
                                                        {product.size ? (
                                                            <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">{product.size}</p>
                                                        ) : null}
                                                    </div>
                                                    <p className="mt-1 text-sm font-medium text-primaryNavy">Rs. {product.total_price}</p>
                                                </div>

                                                <div className="mt-4 sm:mt-0 sm:pr-9">
                                                    <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                                                        Quantity, {product.quantity}
                                                    </label>
                                                    <div className="relative flex items-center max-w-[8rem]">
                                                        <button type="button" id="decrement-button" className="   dark:border-primaryNavy hover:bg-gray-200 border border-gray-300 p-2 h-11 ">
                                                            <Icon iconName='minus' />
                                                        </button>
                                                        <input value={product.quantity} onChange={(e) => { setProductQuantity(e.target.value) }} type="text" id="quantity-input" className=" font-semibold bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-primaryNavy text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-primaryNavy dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        <button type="button" id="increment-button" className="   dark:border-primaryNavy hover:bg-gray-200 border border-gray-300 p-2 h-11 ">
                                                            <Icon iconName='plus' />
                                                        </button>
                                                    </div>

                                                    <div className="absolute top-0 right-0" onClick={() => deleteCart(product.product_id)}>
                                                        <button type="button" className="-m-2 p-2 inline-flex text-red-700 hover:text-gray-500">
                                                            <span className="sr-only">Remove</span>
                                                            <Icon iconName="trash" className="h-5 w-5" color={'red-700'} aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                                                {product.in_stock ? (
                                                    <Icon iconName="check" className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                                ) : (
                                                    <Icon iconName="clock" className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                                                )}

                                                <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Order summary */}
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                        >
                            <h2 id="summary-heading" className="text-lg font-medium text-primaryNavy">
                                Order summary
                            </h2>

                            <dl className="mt-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-600">Subtotal</dt>
                                    <dd className="text-sm font-medium text-primaryNavy">Rs.{cart.total}</dd>
                                </div>
                                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                    <dt className="flex items-center text-sm text-gray-600">
                                        <span>Shipping estimate</span>
                                        <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Learn more about how shipping is calculated</span>
                                            <Icon iconName="questionmarkcircle" className="h-5 w-5" aria-hidden="true" />
                                        </a>
                                    </dt>
                                    <dd className="text-sm font-medium text-primaryNavy">Rs. 5.00</dd>
                                </div>
                                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                    <dt className="flex text-sm text-gray-600">
                                        <span>Tax estimate</span>
                                        <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Learn more about how tax is calculated</span>
                                            <Icon iconName="questionmarkcircle" className="h-5 w-5" aria-hidden="true" />
                                        </a>
                                    </dt>
                                    <dd className="text-sm font-medium text-primaryNavy">Rs. 8.32</dd>
                                </div>
                                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                    <dt className="text-base font-medium text-primaryNavy">Order total</dt>
                                    <dd className="text-base font-medium text-primaryNavy">Rs. {cart.total + 5 + 8.32}</dd>
                                </div>
                            </dl>

                            <div className="mt-6">
                                <Button>Checkout</Button>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </>
    )
}

Cart.defaultProps = {
    products: [],
    cart: {}
}

const mapStateToProps = ({ user }) => {
    return { products: user.cartItems != null ? user.cartItems : [], cart: user.cart == null ? {} : user.cart }
}
const mapDispatchToProps = {
    getCartItem,
    deleteCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)