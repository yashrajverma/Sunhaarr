import React, { useEffect } from 'react'
import Product from '../../components/Product'
import { connect } from 'react-redux';
import { getSingleProducts } from '../../routines';
import { useLocation } from 'react-router-dom';

const ProductPage = ({ getSingleProducts, product }) => {
    const location = useLocation().pathname.split('/')[2]
    useEffect(() => {
        getSingleProducts({ productId: location })
    }, [location])
    return product && <Product product={product} />
};

const mapDispatchToProps = {
    getSingleProducts
}

const mapStateToProps = (product) => {
    return product
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)