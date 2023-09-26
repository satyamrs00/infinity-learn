import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    white: {
      main: '#fff',
      contrastText: '#007BFF',
    },
    yellow: {
      main: '#FCDE5A'
    }
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