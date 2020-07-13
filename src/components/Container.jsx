import { Layout, Spin, Alert} from 'antd';
import Pagination from "./Pagination";
import DataTable from "./DataTable";
import Search from "./SearchFilter";
import PropTypes from "prop-types";
import React from 'react';

// Combine Search, Data table and pagination here
const Container = ({
    error,
    onClose,
    loading,
    pagination,
    countryList,
    handleOnChange,
    handleOnChangePage,
    handleOnSizeChange,
}) => (
    <Spin tip="Loading..." spinning={ loading } >
        <Layout.Content style={{ padding: '0 50px' }} >
            <div className="site-layout-content">
                {
                    error ? (
                        <Alert
                            closable
                            message={error}
                            type="error"
                            onClose={onClose}
                        />
                    ):null
                }
               
                <Search
                    handleOnChange={handleOnChange}
                />
                <DataTable
                    countryList={countryList}
                />
                {
                    pagination ? (
                        <Pagination
                            handleOnChangePage={handleOnChangePage}
                            handleOnSizeChange={handleOnSizeChange}
                            pagination={pagination}
                        />
                    ):null
                }
              
            </div>
        </Layout.Content>
    </Spin>
)
Container.propTypes = {
    onClose: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.string,
    pagination: PropTypes.any,
    countryList: PropTypes.array,
    handleOnChange: PropTypes.func,
    handleOnChangePage: PropTypes.func,
    handleOnSizeChange: PropTypes.func,
};
export default Container;