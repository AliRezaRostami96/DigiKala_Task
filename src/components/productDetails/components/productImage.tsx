import React, { useState } from 'react';
import { ImagesModel } from '../../products/setting';

interface props {
    images: { list: Array<ImagesModel>, main: ImagesModel }
}

const ProductImageComponent: React.FC<props> = ({ images }: props) => {
    const [mainImage, setMainImage] = useState<string>(images.main.url[0]);
    const [imagesList, setImagesList] = useState(images.list);
    return (
        <div className='w-max'>
            <div className='inline-flex justify-center items-center shadow-md h-72 m-0'>
                <img src={mainImage} width={288} alt="mainImage" />
            </div>
            <div className='w-full flex justify-center mt-4'>
                {
                    imagesList.map((img, index) => (
                        <img
                            src={img.url[0]}
                            width={100}
                            key={`image_${index}`}
                            alt="image"
                            className='mx-2'
                            onClick={() => setMainImage(img.url[0])}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default ProductImageComponent;