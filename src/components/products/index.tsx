import React, { Fragment, useEffect, useState } from 'react';
import HTTPRequest from '../../services/httpRequests';
import ProductItem from './components/productItem';
import ProductLoadingComponent from './components/productLoading';
import { ProductModel, ResponseModel } from './setting';

const ProductsComponent: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Array<ProductModel>>([]);

    const getProducts = async () => {

        setLoading(true);

        const query = "page=1&row=15&price[min]=90000&price[max]=100000&has_selling_stock=1&sort=4&q=";

        try {
            const res: ResponseModel = await HTTPRequest({
                route: `/search/?${query}`,
                method: "GET",
            });
            setProducts(res.data.products);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 py-10">
            <div className="w-full md:px-4 flex justify-around items-stretch flex-wrap">

                {
                    loading && (
                        <>
                            <ProductLoadingComponent />
                            <ProductLoadingComponent />
                            <ProductLoadingComponent />
                            <ProductLoadingComponent />
                        </>
                    )
                }

                {
                    products.map((item, index) => (
                        <Fragment key={`product_${index}`}>
                            <ProductItem product={item} />
                        </Fragment>
                    )
                    )

                }
                
            </div>
        </div>
    )

}

export default ProductsComponent;