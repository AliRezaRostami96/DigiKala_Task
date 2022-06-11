import { CircularProgress } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import UsePageQuery from '../../hooks/usePageQuery';
import UseProductQuery from '../../hooks/useProductQuery';
import HTTPRequest from '../../services/httpRequests';
import FilterComponent from './components/filter';
import ProductItem from './components/productItem';
import { ProductModel, ResponseModel } from './setting';

const ProductsComponent: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Array<ProductModel>>([]);
    const [queries, setQueries] = UseProductQuery();
    const [page, setPage] = UsePageQuery();

    const getProducts = async (mergeStatus: boolean) => {

        setLoading(true);

        try {
            const res: ResponseModel = await HTTPRequest({
                route: `/search/?${getQuery()}`,
                method: "GET",
            });

            let productsList = [...res.data.products]

            mergeStatus && (productsList = productsList.concat(products));

            setProducts(productsList);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const getQuery = (): string => {
        const minPrice = queries['price[min]'] ? `&price[min]=${queries['price[min]']}` : '';
        const maxPrice = queries['price[max]'] ? `&price[max]=${queries['price[max]']}` : '';
        const q = queries['q'] ? `&q=${queries['q']}` : '';
        const sort = queries['sort'] ? `&sort=${queries['sort']}` : '';

        return `rows=15&has_selling_stock=1${page + minPrice + maxPrice + q + sort}`;
    }

    const infiniteScrollCallback = (): void => {
        !loading && setPage((val: number) => {
            return val + 1;
        })
    }

    useEffect(() => {
        getProducts(false);
    }, [queries])

    useEffect(() => {
        getProducts(true);
    }, [page])

    return (
        <div className="min-h-screen py-10 flex">
            <div className='w-1/6 md:px-4 border-l-2 border-slate-300'>
                <div className='sticky top-2'>
                    <FilterComponent setQueries={setQueries} />
                </div>
            </div>
            <div className="w-5/6 px-2 flex justify-around items-stretch flex-wrap">

                {
                    loading && (
                        <div className='fixed top-0 right-0 left-0 bottom-0 bg-slate-50 bg-opacity-60 z-50 flex justify-center items-center'>
                            <CircularProgress size={100} />
                        </div>
                    )
                }
                <InfiniteScroll
                    dataLength={products.length}
                    next={infiniteScrollCallback}
                    hasMore={true}
                    loader={<div> </div>}
                >
                    {
                        products.map((item, index) => (
                            <Fragment key={`product_${index}`}>
                                <ProductItem product={item} addToCart={true} />
                            </Fragment>
                        )
                        )

                    }
                </InfiniteScroll>
            </div>
        </div>
    )

}

export default ProductsComponent;