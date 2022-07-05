import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';
import Banner from './Banner';
import Categories from './Categories';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Homepage debug />);
  
    expect(component).toMatchSnapshot();
  });
});