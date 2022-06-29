import React from 'react';
import Banner from './Banner';
import './homepage.css';
import Categories from './Categories';

function Homepage() {
  return (
    <div className='container'>
      <Banner />
      <Categories />
    </div>
  )
}

export default Homepage;