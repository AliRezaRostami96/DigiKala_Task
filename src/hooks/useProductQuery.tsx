import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const UseProductQuery = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [queries, setQueries] = useState(getPrevuesQueries());

    const getStringQueries = (queries: any): any => {
        const newQuery: any = {};

        for (const key in queries) {
            newQuery[key] = queries[key].toString();
        }

        return { ...getPrevuesQueries(), ...newQuery };
    }

    function getPrevuesQueries() {
        const prevuesQueries: any = {};

        searchParams.forEach((val, key) => {
            prevuesQueries[key] = val;
        })

        return prevuesQueries;
    }

    const updateQuery = (queries: any): any => {
        setSearchParams({ ...getStringQueries(queries) });
        setQueries(queries);
    }

    return [queries, updateQuery];
}

export default UseProductQuery;