import PropTypes from "prop-types";
import * as Antd from 'antd';
import React from "react";

// Define Pagination here
const Pagination = ({pagination:{ total }, handleOnChangePage, handleOnSizeChange}) => (
    <div>
        <Antd.Pagination
            size="small"
            total={total}
            showSizeChanger
            pageSizeOptions={[5, 10, 20]}
            onChange={handleOnChangePage}
            onShowSizeChange={handleOnSizeChange}
            showTotal={() => `Total ${total} items`}
        />
    <Antd.Divider/>
 </div>
);
Pagination.propTypes = {
    pagination: PropTypes.object,
    handleOnChangePage: PropTypes.func,
    handleOnSizeChange: PropTypes.func
};
export default Pagination;