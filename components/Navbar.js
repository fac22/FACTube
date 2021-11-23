import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        flexGrow: 1,
        bgcolor: '#1060E2',
        color: '#ffffff',
        padding: 1.5,
        mb: 2,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
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
