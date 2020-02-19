import React from 'react';
import { shallow } from 'enzyme';
import Player from '../src/components/Player';

it('renders correctly', () => {
  const wrapper = shallow(<Player />);
  expect(wrapper.find('View').exists()).toBe(true);
});
