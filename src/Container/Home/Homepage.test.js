import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Homepage from './Homepage';
import Banner from './Banner';
import Categories from './Categories';
import BasicCard from './BasicCard';
const middlewares = []
const mockStore = configureStore(middlewares)

describe('MyComponent', () => {
  const store = mockStore({})
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Homepage debug store={store}/>);
    const componentBanner = shallow(<Banner debug store={store}/>);
    const componentCategories = shallow(<Categories debug store={store}/>);
    const componentBasicCard = shallow(<BasicCard debug store={store}/>);
    
    expect(component).toMatchSnapshot();
    
    expect(componentBanner).toMatchSnapshot();
    expect(componentCategories).toMatchSnapshot();
    expect(componentBasicCard).toMatchSnapshot();
  });
});