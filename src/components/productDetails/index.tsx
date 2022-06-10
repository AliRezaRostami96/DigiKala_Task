import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HTTPRequest from '../../services/httpRequests';
import { ProductDetailsModel, ResponseModel } from './setting';
import CommentContainerComponent from "./components/commentsContainer";
import { CircularProgress } from '@mui/material';
import ProductImageComponent from './components/productImage';

const ProductDetailsComponent: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [product, setProduct] = useState<ProductDetailsModel>();

    const { productId } = useParams();

    const getProduct = async () => {
        setLoading(true);

        try {
            const res: ResponseModel = await HTTPRequest({
                route: `/product/${productId?.substring(4)}/`,
                method: "GET",
            });

            setProduct(res.data.product);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (

        <>
            {
                loading && (
                    <div className='fixed top-0 right-0 left-0 bottom-0 bg-slate-50 bg-opacity-60 z-50 flex justify-center items-center'>
                        <CircularProgress size={100} />
                    </div>
                )
            }
            {
                product && <ProductImageComponent images={product.images} />
            }
            {
                product && <CommentContainerComponent comments={product.last_comments} />
            }

        </>
    )

}

export default ProductDetailsComponent;