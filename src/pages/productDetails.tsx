import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsComponent from '../components/productDetails';
import useTitle from '../hooks/useTitle';

const ProductDetailsPage: React.FC = () => {

    let { productName } = useParams<{ productName: string }>();
    productName = productName && productName.replace(/-/g, " ");

    useTitle(productName ?? "product Details");

    return (
        <ProductDetailsComponent />
    )

}

export default ProductDetailsPage;