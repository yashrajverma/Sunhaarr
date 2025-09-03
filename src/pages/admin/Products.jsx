import React, { startTransition, useCallback, useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../routines'
import ProductCard2 from '../../components/ProductCard2'
import Pagination from '../../components/Pagination'
import { useSearchParams } from 'react-router-dom'
import AdminProductCard from './AdminProductCard'

const Products = ({ products, getProducts, pagination }) => {
    useEffect(() => {
        getProducts()
    }, [])
    const [search, setSearch] = useSearchParams();

    const [itemsPerPage, setItemsPerPage] = useState(pagination.pageSize || 10);
    const [currentPage, setCurrentPage] = useState(pagination.currentPage || 1);
    const category = useMemo(() => search.get('category'), [search]);

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

    const handleResetFilter = useCallback(() => {
        startTransition(() => {
            setSelectedFilters({});
            setSearch({}); // Clear all search params
            setCurrentPage(1); // Reset to first page
        });
    }, [setSearch]);

    return (
        <>
            <div>
                <button className='bg-primaryNavy text-white p-3 my-3 md:my-0' onClick={handleResetFilter}>Remove Filters</button>
                <select onChange={(e) => {
                    setItemsPerPage(e.target.value)
                }} className=' ml-2 py-3 bg-white border-2 border-primaryNavy focus-visible:border-softPeach'>
                    <option value="10" selected className='bg-white border-2 border-primaryNavy focus-visible:border-softPeach'>Items Per Page</option>
                    <option value="5" >10-50</option>
                    <option value="70">50-70</option>
                    <option value="100">70-100</option>

                </select>
            </div>
            <div className="mt-6 mb-4 lg:mt-0 lg:col-span-2 xl:col-span-3">
                <div className="h-auto lg:h-full">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-start gap-2">
                        {products && products.map(({ id, name, category, price, images, description, in_stock }) => (
                            <AdminProductCard
                                key={id}
                                text={name}
                                category={category}
                                link={`/product/${id}`}
                                price={price}
                                image={images}
                                description={description}
                                in_stock={in_stock}
                                is_admin={true}
                                id={id}
                            />
                        ))}
                    </div>
                </div>
                <Pagination items={products} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} allPages={pagination.totalPages} />
            </div >
        </>
    )
}
const mapDispatchToProps = {
    getProducts
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        pagination: state.products.pagination
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)