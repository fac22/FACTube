import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
// import SearchIcon from '@mui/icons-material/Search';
// import {SearchIcon} from '@material-ui/icons';
//import MenuIcon from '@material-ui/icons/Menu';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuIcon,
} from '@material-ui/core';

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" backgroundColor="primary">
        <Toolbar>
          <IconButton>
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h1" color="secondary">
            FAC-tube
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
// className={classes.palette}
