import { Fragment, lazy, memo, Suspense, useEffect, useMemo, useState, useTransition, useCallback } from 'react'
import { Disclosure } from '@headlessui/react'
import PropTypes from 'prop-types';
import { categories } from '../../constants'
import formatSearchQuery from '../../utils/getTitle'
import { useSearchParams } from 'react-router-dom'
import Pagination from '../../components/Pagination'
import { connect } from 'react-redux'
import { getProducts } from '../../routines';
import Icon from '../../components/Icon'
import SkeletonCard from '../../components/Skeleton';

const Modal = lazy(() => import('../../components/Modal'))
const ProductCard2 = lazy(() => import('../../components/ProductCard2'))

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProductCategories({ getProducts, products, pagination }) {
    const [isPending, startTransition] = useTransition();
    const filters = useMemo(() => [
        {
            id: 'category',
            name: 'Category',
            options: categories.filter(item => { return item.type === 'category' }),
        },
        {
            id: 'metal',
            name: 'Metal',
            options: categories.filter(item => { return item.type === 'metal' })
        },
        {
            id: 'purity',
            name: 'Gold Purity',
            options: categories.filter(item => { return item.type === 'purity' })
        },
        {
            id: 'occasions',
            name: 'Occasions',
            options: categories.filter(item => { return item.type === 'occasions' })
        },
    ], [])
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [search, setSearch] = useSearchParams();
    const [itemsPerPage, setItemsPerPage] = useState(pagination.pageSize || 10);
    const [currentPage, setCurrentPage] = useState(pagination.currentPage || 1);

    // Memoize the category to prevent unnecessary rerenders
    const category = useMemo(() => search.get('category'), [search]);

    // Memoize the products fetch params
    const fetchParams = useMemo(() => ({
        category: category || "",
        pageSize: itemsPerPage,
        page: currentPage
    }), [category, itemsPerPage, currentPage]);

    // Single source of truth for products fetch
    useEffect(() => {
        if (fetchParams.category !== undefined) {
            getProducts(fetchParams);
        }
        return () => { }
    }, [fetchParams, getProducts]);

    const [selectedFilters, setSelectedFilters] = useState({});
    const handleResetFilter = useCallback(() => {
        startTransition(() => {
            setSelectedFilters({});
            setSearch({}); // Clear all search params
            setCurrentPage(1); // Reset to first page
        });
    }, [setSearch]);

    const handleFilterChange = useCallback((sectionId, value) => {
        startTransition(() => {
            // Update selected filters
            const updatedFilters = { ...selectedFilters, [sectionId]: value };
            setSelectedFilters(updatedFilters);
        });
    }, [selectedFilters]);

    // Handle filter changes with proper params preservation
    useEffect(() => {
        const currentParams = Object.fromEntries(search.entries());
        setSearch({
            ...currentParams,
            ...selectedFilters
        });
    }, [selectedFilters, search, setSearch]);



    return (
        <>
            {products.length === 0 || isPending ?
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>

                : <div className="bg-white">
                    <div>
                        {/* Mobile filter dialog */}
                        <Suspense fallback={
                            <div className='h-screen w-screen flex justify-center items-center'>
                                <Icon iconName='loading' className='animate-spin' />
                            </div>}>
                            <Modal show={mobileFiltersOpen} as={Fragment} setShow={setMobileFiltersOpen}>
                                {/* Filters */}
                                <form className="mt-4">
                                    {filters.map((section) => (
                                        <Disclosure as="div" key={section.name} className="border-t border-gray-200 pt-4 pb-4">
                                            {({ open }) => (
                                                <fieldset>
                                                    <legend className="w-full px-2">
                                                        <Disclosure.Button className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                            <span className="text-sm font-medium text-gray-900">{section.name}</span>
                                                            <span className="ml-6 h-7 flex items-center">
                                                                <Icon
                                                                    iconName='chevrondown'
                                                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        </Disclosure.Button>
                                                    </legend>
                                                    <Disclosure.Panel className="pt-4 pb-2 px-4">
                                                        <div className="space-y-6">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        id={`${section.id}-${optionIdx}-mobile`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                        type="radio"
                                                                        onChange={() => handleFilterChange(section.id, option.value)}
                                                                        className="h-4 w-4 border-gray-300 rounded text-primaryNavy focus:ring-primaryNavy"
                                                                    />
                                                                    <label
                                                                        htmlFor={`${section.id}-${optionIdx}-mobile`}
                                                                        className="ml-3 text-sm text-gray-500"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </fieldset>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>
                            </Modal>
                        </Suspense>

                        <main className="max-w-2xl mx-auto py-4 px-4 sm:py-10 sm:px-6 lg:max-w-[100%] lg:px-10 relative">
                            <div className="border-b border-gray-200 pb-10 flex justify-between items-center flex-wrap md:flex-nowrap bg-white">
                                <div className=''>

                                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{category ? formatSearchQuery(category) : 'Shop Trendy Jewels'}</h1>
                                    <p className="mt-4 text-base text-gray-500">
                                        Checkout out the latest release of all type of Jewellery!
                                    </p>
                                </div>
                                <div>
                                    <button className='bg-primaryNavy text-white p-3 my-3 md:my-0 text-sm md:text-base' onClick={handleResetFilter}>Remove Filters</button>
                                    <select onChange={(e) => {
                                        setItemsPerPage(e.target.value)
                                    }} className=' ml-2 py-3 bg-white border-2 border-primaryNavy focus-visible:border-softPeach text-sm md:text-base'>
                                        <option value="10" selected className='bg-white border-2 border-primaryNavy focus-visible:border-softPeach'>Items Per Page</option>
                                        <option value="5" >10-50</option>
                                        <option value="70">50-70</option>
                                        <option value="100">70-100</option>

                                    </select>
                                </div>

                            </div>

                            <div className="pt-6 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                                <aside>
                                    <h2 className="sr-only">Filters</h2>

                                    <button
                                        type="button"
                                        className="inline-flex items-center lg:hidden"
                                        onClick={() => setMobileFiltersOpen(true)}
                                    >
                                        <span className="text-sm font-medium text-gray-700">Filters</span>
                                        <Icon iconName='plus' className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </button>

                                    <div className="hidden lg:block h-[100vh] overflow-y-scroll sticky top-0">
                                        <form className="divide-y divide-gray-200 space-y-10 pl-4">
                                            {filters.map((section) => (
                                                <div key={section.id} className="pt-6">
                                                    <fieldset>
                                                        <legend className="block text-sm font-semibold text-gray-900">{section.name}</legend>
                                                        <div className="pt-6 space-y-3">
                                                            {section.options.map((option) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        id={`${section.id}-${option.value}`}
                                                                        name={`${section.id}[]`}
                                                                        value={option.value}
                                                                        type="radio"
                                                                        checked={option.value == selectedFilters[section.id]}
                                                                        className="h-4 w-4 border-gray-300 rounded text-primaryNavy focus:ring-primaryNavy"
                                                                        onChange={() => handleFilterChange(section.id, option.value)}
                                                                    />
                                                                    <label htmlFor={`${section.id}-${option.value}`} className="ml-3 text-sm text-gray-600">
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            ))}
                                        </form>
                                    </div>
                                </aside>
                                <div className="mt-6 mb-4 lg:mt-0 lg:col-span-2 xl:col-span-3">
                                    <div className="h-auto lg:h-full">
                                        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-start gap-2">

                                            {products.map(({ id, name, category, link, images, price, description, in_stock }, index) => (
                                                <Suspense fallback={
                                                    <div className='h-screen w-screen flex justify-center items-center'>
                                                        <Icon iconName='loading' className='animate-spin' />
                                                    </div>}>
                                                    <ProductCard2
                                                        key={id}
                                                        id={id}
                                                        text={name}
                                                        category={category}
                                                        link={`/product/${id}`}
                                                        price={price}
                                                        image={images}
                                                        description={description}
                                                        in_stock={in_stock}
                                                    />
                                                </Suspense>
                                            ))}
                                        </div>
                                    </div>
                                    <Pagination items={products} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} allPages={pagination.totalPages} />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>}
        </>
    )
};

// Prop types for the Button
ProductCategories.propTypes = {
    getProducts: PropTypes.func,
    products: PropTypes.array,
    pagination: PropTypes.object
};

// Default props
ProductCategories.defaultProps = {
    products: [],
    getProducts: () => { },
};

const mapStateToProps = (state) => {
    const { products, pagination } = state.products
    return { products, pagination }
}

const mapDispatchToProps = {
    getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(ProductCategories))
