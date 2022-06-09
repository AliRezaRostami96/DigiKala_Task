import React, { Fragment, useEffect, useState } from 'react';
import UseProductQuery from '../../hooks/useProductQuery';
import HTTPRequest from '../../services/httpRequests';
import FilterComponent from './components/filter';
import ProductItem from './components/productItem';
import ProductLoadingComponent from './components/productLoading';
import { ProductModel, ResponseModel } from './setting';

const ProductsComponent: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Array<ProductModel>>([]);
    const [queries, setQueries] = UseProductQuery();

    const getProducts = async () => {

        setLoading(true);

        try {
            const res: ResponseModel = await HTTPRequest({
                route: `/search/?${getQuery()}`,
                method: "GET",
            });
            setProducts(res.data.products);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const getQuery = (): string => {
        const page = queries.page ? `&page=${queries.page}` : "";
        const minPrice = queries['price[min]'] ? `&price[min]=${queries['price[min]']}` : '';
        const maxPrice = queries['price[max]'] ? `&price[max]=${queries['price[max]']}` : '';
        const q = queries['q'] ? `&q=${queries['q']}` : '';
        const sort = queries['sort'] ? `&sort=${queries['sort']}` : '';

        return `rows=15&has_selling_stock=1${page + minPrice + maxPrice + q + sort}`;
    }

    useEffect(() => {
        getProducts();
    }, [queries])

    return (
        <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 py-10">
            <div className='w-2/6'>
                <FilterComponent />
            </div>
            <div className="w-4/6 md:px-4 flex justify-around items-stretch flex-wrap">

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