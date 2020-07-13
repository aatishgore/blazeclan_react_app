import DataTable from "../components/DataTable";
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
describe('DataTable', () => {
    it('expect same Table heading', () => {
        const component = mount(<DataTable />);
        expect(component.find('thead').text()).toEqual(`NameCapitalRegionAreaPopulation`);
        component.unmount();
    })
});