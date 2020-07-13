import Container from "../components/Container";
import { getCountry } from "../services/services";
import React, { useState, useEffect } from 'react';
import { errorHandler } from "../lib/utils/helper";

const CountryList= () => {
    // Declare state
    const [serachValue, setSearchValue] = useState(null);
    const [pagination, setPagination] = useState(false);
    const [countryList, setCountryList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    
    // Call API here to get country
    useEffect(() => {
        getCountryStarted();
        getCountry({ page, limit, serachValue }).then((res) => {
            getCountrySuccess(res.data);
        }).catch((err) => {
            getCountryFail(errorHandler(err));
        })
    }, [page, limit, serachValue]);

    // Here we are set state as per the api response
    const getCountryStarted = () => {
        setLoading(true);
    };
    const getCountrySuccess = ({data, pagination}) => {
        setError(null);
        setCountryList(data);
        setPagination(pagination);
        setLoading(false);
    };
    const getCountryFail = err => {
        setError(err);
        setCountryList([]);
        setPagination(false);
        setLoading(false);
    };

    return (
        <Container
            error={error}
            loading={loading}
            pagination={pagination}
            countryList={countryList}
            onClose={()=> setError(null)}
            handleOnChange={(value)=> setSearchValue(value)}
            handleOnChangePage={(pageNumber,pageSize) => {
                setPage(pageNumber)
                setLimit(pageSize)
            }}
            handleOnSizeChange={(pageNumber,pageSize) => {
                setPage(pageNumber)
                setLimit(pageSize)
            }}
        />
    )
}
export default CountryList;