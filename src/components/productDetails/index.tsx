import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HTTPRequest from '../../services/httpRequests';
import { ProductDetailsModel, ResponseModel } from './setting';
import CommentContainerComponent from "./components/commentsContainer";

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

    useLayoutEffect(() => {

        getProduct();
    }, [])

    return (

        <>

            {
                product && <CommentContainerComponent comments={product.last_comments} />
            }

        </>
    )

}

export default ProductDetailsComponent;