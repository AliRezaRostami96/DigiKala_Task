import { Button, Typography } from '@mui/material';
import React from 'react';
import CustomRatingComponent from '../../Public/customRating';
import { ProductDetailsModel, Translations } from '../setting';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../../store/actions/cartAction';

interface props {
    product: ProductDetailsModel
}

const ProductDescriptionComponent: React.FC<props> = ({ product }: props) => {

    const cartDispatch = useDispatch();

    const getPriceFormat = (): string => {
        return (product.default_variant.price.selling_price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    return (
        <>
            <Typography component="h1" variant='h5' className='mb-2'>
                {product.title_fa}
            </Typography>
            <CustomRatingComponent rate={product.rating.rate} />
            <div>
                <Typography component="div">
                    <AttachMoneyIcon className='text-green-800' />
                    <Typography className='text-right' component="span" variant="h6">
                        {getPriceFormat()}
                    </Typography>
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => cartDispatch(AddToCart(product))}
                >
                    {Translations.addToCart}
                </Button>
            </div>
        </>
    )

}

export default ProductDescriptionComponent;