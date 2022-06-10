import React from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ReducerModel } from '../../../store/reducers/cartReducer';
import { ProductDetailsModel } from '../../productDetails/setting';
import ProductItem from '../../products/components/productItem';
import { ProductModel } from '../../products/setting';
import { Translation } from './setting';

interface props {
    show: boolean,
    onHide: VoidFunction,
}

const CartModal: React.FC<props> = (props: props) => {
    const cartList: Array<ProductDetailsModel | ProductModel> = useSelector((state: ReducerModel) => state.cartList);
    console.log("CartModal");
    console.log(cartList);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            scrollable={true}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {Translation.cart}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    cartList.map(item => (
                        // <ProductComponent product={item} />
                        <ProductItem product={item} />
                    ))
                }
                {
                    cartList.length == 0 && <Alert variant="light">
                        {Translation.noItem}
                    </Alert>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>{Translation.close}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CartModal