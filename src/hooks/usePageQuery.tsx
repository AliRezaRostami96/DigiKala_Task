import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const UsePageQuery = (): [number, any] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialValue = Number(searchParams.get("page")) ?? 1;

    const [page, setPage] = useState(initialValue);

    const getPrevuesQuery = () => {
        const otherQuery: any = {};
        searchParams.get("sort") && (otherQuery.sort = searchParams.get("sort"));
        searchParams.get("price[min]") && (otherQuery['price[min]'] = searchParams.get("price[min]"));
        searchParams.get("price[max]") && (otherQuery['price[max]'] = searchParams.get("price[max]"));
        searchParams.get("q") && (otherQuery.q = searchParams.get("q"));
        return otherQuery;
    }
    useEffect(() => {
        setSearchParams({ ...getPrevuesQuery(), page: `${page}` });
    }, [page])

    return [page, setPage];
}

export default UsePageQuery;