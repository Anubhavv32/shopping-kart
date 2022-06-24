import React from 'react';
import Banner from './Banner';
import Header from './Header';
import './homepage.css';
import Container from '@mui/material/Container';
import Categories from './Categories';
import Modal from '../LoginPage/Modal';
function Homepage() {
  return (
    < >
      <Header />
          <Modal />
      <Banner />
      <Categories />
    </>
  )
}

export default Homepage;