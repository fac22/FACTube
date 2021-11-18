import React from 'react';
import Navbar from './Navbar';
import Box from '@material-ui/core/Box';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box sx={{ height: '100vh', fontFamily: 'Montserrat' }}>{children}</Box>
    </>
  );
}

export default Layout;
