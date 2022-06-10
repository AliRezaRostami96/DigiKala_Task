import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const UsePageQuery = (): [number, any] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialValue = Number(searchParams.get("page")) ?? 1;

    const [page, setPage] = useState(initialValue);

    useEffect(() => {
        setSearchParams({ page: `${page}` });
    }, [page])

    return [page, setPage];
}

export default UsePageQuery;