import { Rating } from '@mui/material';
import React from 'react';

interface props {
    rate: number
}

const CustomRatingComponent: React.FC<props> = ({ rate }: props) => {

    const getFloatRating = (): number => {
        return (parseFloat((rate).toString()) / 20)
    }

    return (
        <Rating readOnly defaultValue={getFloatRating()} precision={0.1} />
    )
}

export default CustomRatingComponent;