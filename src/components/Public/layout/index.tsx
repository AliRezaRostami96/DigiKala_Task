import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CartModal from '../cartModal/index';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Alert, Badge, BadgeProps, IconButton, Snackbar } from '@mui/material';
import { styled } from '@mui/system';
import { ProductDetailsModel } from '../../productDetails/setting';
import { ProductModel } from '../../products/setting';
import { ReducerModel } from '../../../store/reducers/cartReducer';
import { useSelector } from 'react-redux';
import { SnackBarReducerModel, SnackBarStateModel } from '../../../store/reducers/snackbarReducer';

interface props {
    children: React.ReactNode
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: "100%",
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const LayoutComponent: React.FC<props> = ({ children }: props) => {

    const cartList: Array<ProductDetailsModel | ProductModel> = useSelector((state: ReducerModel) => state.cartList);
    const snackbar: SnackBarStateModel = useSelector((state: SnackBarReducerModel) => state.snackbar);
    const [cartModalShow, setCartModalShowShow] = useState<boolean>(false);

    return (
        <>
            <div className='text-left px-4 pt-1'>
                <IconButton aria-label="cart" onClick={() => setCartModalShowShow(true)}>
                    {
                        cartList.length > 0 && <StyledBadge badgeContent={cartList.length} color="primary">
                            <ShoppingCartIcon className='text-blue-600' />
                        </StyledBadge>
                    }
                    {
                        cartList.length == 0 && <ShoppingCartIcon />

                    }
                </IconButton>
            </div>

            {children}

            <CartModal
                show={cartModalShow}
                setShow={() => setCartModalShowShow(false)}
            />

            <Snackbar open={snackbar.value} autoHideDuration={6000}>
                <Alert severity="success">{snackbar.message}</Alert>
            </Snackbar>
        </>
    )
}

export default LayoutComponent;