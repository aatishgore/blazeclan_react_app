import Search from "../components/SearchFilter";
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });

const clickFn = jest.fn();

describe('SearchFilter', () => {
    it('button click should search content', () => {
        const component = mount(<Search handleOnChange={clickFn} />);
        const event = {
            target: {
                value: 'India'
            }
        }
        component.find('input.ant-input').simulate('change', event)
        expect(component.find('input.ant-input').prop('value')).toEqual('India');
        component.find('button.ant-input-search-button').simulate('click');
        expect(clickFn).toHaveBeenCalled();
        component.unmount();
    });
});