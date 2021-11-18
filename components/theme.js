import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1060E2',
    },
    secondary: {
      main: '#ff0000',
    },
    fontLight: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    h1: {
      fontWeight: 700,
      fontSize: '2.2rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.2rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

export default theme;
