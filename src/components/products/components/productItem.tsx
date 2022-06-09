import React from 'react';
import { Link } from 'react-router-dom';
import { ProductItemProps, Translation } from '../setting';

const ProductItem: React.FC<ProductItemProps> = ({ product }: ProductItemProps): JSX.Element => {
    return (
        <div className='py-2'>
            <div className="h-full max-w-xs bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <div className="relative">
                    <img className="w-full rounded-xl" src={product.images.main.url[0]} alt="image" />
                    <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
                </div>
                <div className="my-4">
                    <h2 className="mt-4 mb-2 h-14 text-gray-800 text-xl font-bold cursor-pointer">{product.title_fa}</h2>
                    <p>
                        <span className='font-bold'>{Translation.rate}: </span>
                        <span>{product.default_variant.rate}</span>
                    </p>
                    <p>
                        <span className='font-bold'>{Translation.price}: </span>
                        <span>{product.default_variant.price.selling_price}</span>
                    </p>
                    <Link to={product.url.uri}>
                        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">{Translation.details}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;