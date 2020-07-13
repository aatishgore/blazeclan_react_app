import PropTypes from "prop-types";
import { Table } from 'antd';
import React from "react";

// Data table component
const DataTable = ({ countryList }) => {
    // Define columns for table
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Capital',
          dataIndex: 'capital',
        },
        {
          title: 'Region',
          dataIndex: 'region',
        },
        {
          title: 'Area',
          dataIndex: 'area',
        },
        {
          title: 'Population',
          dataIndex: 'population',
        },
    ];

    // Return data table here
    return(
      <Table
        columns={columns}
        pagination={false}
        dataSource={countryList}
        rowKey={countryList => countryList.population } 
      />
    )
};
DataTable.propTypes = {
  countryList: PropTypes.array,
};
export default DataTable;