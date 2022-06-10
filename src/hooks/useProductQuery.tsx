import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export interface ProductQueryModel {
    sort: number,
    'price[min]': number,
    'price[max]': number,
    q: string
}

interface StringProductQueryModel {
    sort: string,
    'price[min]': string,
    'price[max]': string,
    q: string
}

const UseProductQuery = (): [ProductQueryModel, any] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialValue = {
        page: Number(searchParams.get("page")) ?? "1",
        sort: Number(searchParams.get("sort")) ?? "4",
        "price[min]": Number(searchParams.get("price[min]")) ?? 1,
        "price[max]": Number(searchParams.get("price[max]")) ?? 99999999,
        q: searchParams.get("q") ?? "",
    }

    const [queries, setQueries] = useState<ProductQueryModel>(initialValue);

    const getStringQueries = (q: ProductQueryModel): StringProductQueryModel => {
        const newQuery: StringProductQueryModel = {
            "price[max]": q['price[max]'].toString(),
            "price[min]": q['price[min]'].toString(),
            q: q.q,
            sort: q.sort.toString(),
        }
        return newQuery;
    }

    const updateQuery = (query: ProductQueryModel): any => {
        setSearchParams({ ...getStringQueries(query) });
        setQueries(query);
    }

    return [queries, updateQuery];
}

export default UseProductQuery;