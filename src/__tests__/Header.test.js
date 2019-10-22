import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/header/Header';

describe('Header component', () => {
  it('Renders heading text', () => {
    const wrapper = shallow(<Header heading="Heading goes here" />);
    expect(wrapper.text()).toContain('Heading goes here');
  });
});
