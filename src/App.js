import CountryList from "./container/CountryList";
import {
  Header,
  Footer,
} from "./components";
import { Layout } from 'antd';
import React from 'react';

// We are combine our all component here
const App = () => (
  <Layout className="layout">
    <Header />  {/*Show header content*/}
    <CountryList /> {/*Show country list*/}
    <Footer /> {/*Show footer content*/}
  </Layout>
);
export default App;
