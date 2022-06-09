import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export interface ProductQueryModel {
    page?: string,
    sort?: string,
    'price[min]': string,
    'price[max]': string,
    q: string
}

const UseProductQuery = (): [ProductQueryModel, any] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [queries, setQueries] = useState<ProductQueryModel>({
        page: searchParams.get("page") ?? "1",
        sort: searchParams.get("sort") ?? "4",
        "price[min]": searchParams.get("price[min]") ?? '1',
        "price[max]": searchParams.get("price[max]") ?? '99999999',
        q: searchParams.get("q") ?? "",
    });

    const updateQuery = (query: ProductQueryModel): any => {
        setSearchParams({ ...query });
        setQueries(query);
    }

    return [queries, updateQuery];
}

export default UseProductQuery;