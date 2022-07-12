import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import MyComponent from './Products';
const middlewares = []
const mockStore = configureStore(middlewares)

describe('MyComponent', () => {
  const store = mockStore({})
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MyComponent debug store={store}/>);
  
    expect(component).toMatchSnapshot();
  });
});