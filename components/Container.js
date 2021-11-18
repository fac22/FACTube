import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Videos from './Videos';
import Search from './Search';
import Navbar from './Navbar';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="sm">
        <Box sx={{ height: '100vh', fontFamily: 'Montserrat' }}>
          <Search />
          <Videos />
        </Box>
      </Container>
    </React.Fragment>
  );
}
