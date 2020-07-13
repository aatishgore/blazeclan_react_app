import PropTypes from "prop-types";
import { Input } from 'antd';
import React from 'react';

//Define search filter here
const Search = ({ handleOnChange }) => (
    <div className='search-container'>
        <Input.Search
            placeholder="Search country by name"
            onPressEnter={(e)=> handleOnChange(e.target.value)}
            onSearch={handleOnChange}
            enterButton
            size="large"
            allowClear
        />
   </div>
);
Search.propTypes = {
    handleOnChange: PropTypes.func,
};
export default Search;