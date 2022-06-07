import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './productDetails';
import ProductsPage from './products';

const Routing: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="about" element={<ProductDetailsPage />} />
        </Routes>
    )

}

export default Routing;