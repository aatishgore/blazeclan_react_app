import Pagination from "../components/Pagination";
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });

const clickFn = jest.fn();
const total = 100;
const pagination = { total }

describe('Pagination', () => {
    it('expect same data to display', () => {
        // const component = mount(<Pagination pagination={pagination} />);
        // console.log('component.html()', component.html());
        // expect(component.html()).toEqual(`<footer class="ant-layout-footer" style="text-align: center;">My app ©2020 Created by Neosoft</footer>`);
        // component.unmount();
    })
});