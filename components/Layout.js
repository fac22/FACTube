import React from 'react';
import Navbar from './Navbar';
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm">{children}</Container>
    </>
  );
};

export default Layout;
