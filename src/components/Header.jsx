import { Layout ,Menu } from 'antd';
import React from "react";

// Define Header here
const Header = () => (
    <Layout.Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">Country</Menu.Item>
    </Menu>
  </Layout.Header>
)
export default Header;