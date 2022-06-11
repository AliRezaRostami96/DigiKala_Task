import { Alert, AppBar, Dialog, IconButton, Toolbar, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { ReducerModel } from '../../../store/reducers/cartReducer';
import { ProductDetailsModel } from '../../productDetails/setting';
import ProductItem from '../../products/components/productItem';
import { ProductModel } from '../../products/setting';
import { Translation } from './setting';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
interface props {
    show: boolean,
    setShow: (v: boolean) => void,
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CartModal: React.FC<props> = ({ show, setShow }: props) => {
    const cartList: Array<ProductDetailsModel | ProductModel> = useSelector((state: ReducerModel) => state.cartList);

    return (
        <div>
            <Dialog
                fullScreen
                open={show}
                onClose={() => setShow(false)}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => setShow(false)}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {Translation.cart}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="flex flex-wrap p-2">
                    {
                        cartList.map((item, index) => (
                            <Fragment key={`product_${index}`}>
                                <ProductItem product={item} addToCart={false} />
                            </Fragment>
                        ))
                    }
                    {
                        cartList.length == 0 && <Alert variant="outlined" severity="info" className='mt-4 mx-4'>
                            {Translation.noItem}
                        </Alert>
                    }
                </div>
            </Dialog>
        </div>
    )
}

export default CartModal