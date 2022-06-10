import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ProductDetailsModel } from '../../../productDetails/setting';
import { ProductModel } from '../../../products/setting';
import { Translation } from '../setting';

interface props {
    product: ProductDetailsModel | ProductModel;
}

const ProductComponent: React.FC<props> = ({ product }: props) => {

    return (
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={product.images.main.url[0]} />
            <Card.Body className="text-center">
                <Card.Title style={{ height: "55px" }} className='overflow-hidden'>
                    <span className="fs-6 hei">{product.title_fa}</span>
                </Card.Title>
                <Card.Text>
                    <span className='fw-bold'>{Translation.rate}: </span>
                    <span>{product.default_variant.rate}</span>
                    <hr />
                    <span className='fw-bold'>{Translation.price}: </span>
                    <span>{product.default_variant.price.selling_price}</span>
                </Card.Text>
                <Button variant="primary">{Translation.delete}</Button>
            </Card.Body>
        </Card >
    )
}

export default ProductComponent;