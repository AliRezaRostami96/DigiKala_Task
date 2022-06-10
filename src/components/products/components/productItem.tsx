import { Box, Card, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCart } from '../../../store/actions/cartAction';
import { ProductItemProps, Translation } from '../setting';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const ProductItem: React.FC<ProductItemProps> = ({ product }: ProductItemProps): JSX.Element => {

    const cartDispatch = useDispatch();

    const getFloatRating = (): number => {
        return (parseFloat((product.rating.rate).toString()) / 20)
    }

    const getPriceFormat = (): string => {
        return (product.default_variant.price.selling_price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    return (
        <Typography component="div" className="md:w-3/6 p-1">
            <Card className='flex h-full'>
                <Typography component="div">
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={product.images.main.url[0]}
                        alt="img"
                    />
                    <Rating readOnly defaultValue={getFloatRating()} precision={0.1} />
                </Typography>
                <Box className='flex flex-col justify-between flex-1'>
                    <CardContent className='flex'>
                        <Link to={product.url.uri} className="no-underline text-gray-800 hover:text-black cursor-pointer">
                            <Typography className='text-right' component="div" variant="h6">
                                {product.title_fa}
                            </Typography>
                        </Link>
                    </CardContent>
                    <Box className='flex justify-between w-full place-self-end pl-1 pb-1'>
                        <Typography component="div">
                            <AttachMoneyIcon className='text-green-800' />
                            <Typography className='text-right' component="span" variant="h6">
                                {getPriceFormat()}
                            </Typography>
                        </Typography>
                        <IconButton onClick={() => cartDispatch(AddToCart(product))} aria-label="previous">
                            <AddShoppingCartIcon className='text-green-800' />
                        </IconButton>
                    </Box>
                </Box>
            </Card>
        </Typography >
    )
}

export default ProductItem;