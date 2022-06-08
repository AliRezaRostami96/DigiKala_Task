import React from 'react';
import ProductsComponent from '../components/products';
import useTitle from '../hooks/useTitle';

const ProductsPage: React.FC = () => {
    useTitle('Products');

    return (
        <ProductsComponent />
    )
}

export default ProductsPage;