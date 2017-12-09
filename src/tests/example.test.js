import React from 'react';
import TestComponent from '../components/testcomponent';

test('should assert title for testcomponent', () => {
    const wrapper = shallow(<TestComponent />)
    expect(wrapper.find('h1').text()).toBe('Hello')
})

test('should render pure HTML', () => {
    expect(render(<TestComponent />).text()).toEqual('Hello');
})

test('should mount in a full dom', () => {
    expect(mount(<TestComponent />).find('.foo').length).toBe(1);
})