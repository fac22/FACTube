import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { styled, alpha } from '@mui/material/styles';
import theme from './theme';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
// import { SearchIcon, MenuIcon } from '@mui/icons-material';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  TextField,
} from '@material-ui/core';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" backgroundcolor="primary">
          <Toolbar justifycontent="space-between">
            <IconButton aria-label="menu" color="inherit" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h1"
              color="fontLight"
              component="div"
              // noWrap
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              FAC-tube
            </Typography>
            {/* <Search>
              <InputBase
                backgroundColor="secondary"
                placeholder="Search..."
                color="inherit"
              />
              <IconButton aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
            </Search> */}

            <Search>
              {/* <StyledInputBase */}
              <TextField
                // hiddenLabel
                // defaultVlue="Small"
                label="Search"
                variant="filled"
                type="search"
                color="inherit"
                // placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                // value={search}
                // onChange={handleChange}
              />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
// className={classes.palette}
