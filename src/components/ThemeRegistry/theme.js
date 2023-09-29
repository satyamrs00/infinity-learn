import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1024,
      lgLegacy: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#007BFF',
      contrastText: '#fff',
    },
    white: {
      main: '#fff',
      contrastText: '#007BFF',
    },
    yellow: {
      main: '#FCDE5A'
    },
    black: {
      main: '#080E14'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          fontSize: '1rem',
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    },
  },
});

export default theme;