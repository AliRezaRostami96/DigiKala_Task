import React, { useState } from 'react';
import { ImagesModel } from '../../products/setting';

interface props {
    images: { list: Array<ImagesModel>, main: ImagesModel }
}

const ProductImageComponent: React.FC<props> = ({ images }: props) => {
    const [mainImage, setMainImage] = useState<string>(images.main.url[0]);
    const [imagesList, setImagesList] = useState(images.list);
    return (
        <>
            <div className='inline-flex justify-center items-center shadow-md m-0 p-4'>
                <img src={mainImage} alt="mainImage" />
            </div>
            <div className='w-full flex justify-center mt-4 overflow-auto'>
                {
                    imagesList.map((img, index) => (
                        <img
                            src={img.url[0]}
                            width={100}
                            key={`image_${index}`}
                            alt="image"
                            className='mx-2 cursor-pointer'
                            onClick={() => setMainImage(img.url[0])}
                        />
                    ))
                }
            </div>
        </>
    )

}

export default ProductImageComponent;