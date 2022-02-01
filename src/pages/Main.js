import React from 'react';
import LeftMenu from '../components/LeftMenu';
import Navbar from '../components/Navbar';
import RightMenu from '../components/RightMenu';
import { Container } from './MainStyle';

const Main = () => {
  return (
    <>
      <Navbar />
      <Container>
        <LeftMenu />
        <RightMenu />
      </Container>  
    </>
  )
};

export default Main;

