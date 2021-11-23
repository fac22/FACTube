import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Drawer from './Drawer';

const Navbar = () => {
  return (
    <AppBar
      style={{ backgroundColor: '#1060E2', color: 'white' }}
      position="sticky"
      sx={{
        padding: 1.5,
        mb: 2,
      }}
    >
      <Toolbar>
        <Drawer />
        <Typography
          sx={{ flexGrow: 1, fontFamily: 'Montserrat', fontSize: 28, ml: 4 }}
        >
          <Link href="/">
            <a>FAC-tube</a>
          </Link>
        </Typography>
        <IconButton>
          <Link href="/login">
            <Avatar />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
