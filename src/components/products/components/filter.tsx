import { Button, FormControl, InputLabel, MenuItem, Select, Slider, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Translation } from '../setting';

interface props {
    setQueries: (v: any) => VoidFunction
}



const FilterComponent: React.FC<props> = ({ setQueries }: props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialValues: any = {
        'price[min]': searchParams.get("price[min]") ? Number(searchParams.get("price[min]")) : 50,
        'price[max]': searchParams.get("price[max]") ? Number(searchParams.get("price[max]")) : 1000000,
        q: searchParams.get("q") ?? "",
        sort: searchParams.get("sort") ? Number(searchParams.get("sort")) : 4
    }

    const [query, setQuery] = useState<string>(initialValues.q);
    const [priceRange, setPriceRange] = useState<number[]>([initialValues['price[min]'], initialValues['price[max]']]);
    const [sort, setSort] = useState<number>(initialValues.sort);

    const valueLabelFormat = (value: number): string => {
        return (value).toString().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    const minDistance = 10;
    const onPriceChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ): void => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setPriceRange([Math.min(newValue[0], priceRange[1] - minDistance), priceRange[1]]);
        } else {
            setPriceRange([priceRange[0], Math.max(newValue[1], priceRange[0] + minDistance)]);
        }
    };

    const getQueries = (): any => {
        const priceMin = priceRange[0];
        const priceMax = priceRange[1];
        const queries: any = {
            "price[min]": priceMin,
            "price[max]": priceMax,
            q: query,
            sort: sort
        }
        return queries;
    }

    const onFilter = (): void => {
        setQueries(getQueries());

    }

    return (
        <>
            <TextField
                id="search"
                label={Translation.search}
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <FormControl fullWidth className='mt-4 text-right'>
                <InputLabel id="sort-label">{Translation.sort}</InputLabel>
                <Select
                    labelId="sort-label"
                    id="sort-field"
                    label={Translation.sort}
                    value={sort}
                    onChange={(e) => setSort(+e.target.value)}
                >
                    <MenuItem value={1}>مرتب سازی 1</MenuItem>
                    <MenuItem value={2}>مرتب سازی 2</MenuItem>
                    <MenuItem value={3}>مرتب سازی 3</MenuItem>
                    <MenuItem value={4}>مرتب سازی 4</MenuItem>
                </Select>
            </FormControl>

            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={priceRange}
                onChange={onPriceChange}
                min={initialValues['price[min]']}
                step={1}
                max={initialValues['price[max]']}
                valueLabelDisplay="auto"
                className='mt-4'
                valueLabelFormat={valueLabelFormat}
            />

            <Button variant="contained" className='w-full' onClick={onFilter}>{Translation.filter}</Button>
        </>
    )
}

export default FilterComponent