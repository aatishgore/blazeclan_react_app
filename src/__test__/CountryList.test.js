import CountryList from "../container/CountryList";
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });

describe('CountryList', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<CountryList debug />);
        expect(component).toMatchSnapshot();
    });
});