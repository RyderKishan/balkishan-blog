import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'dark',
    contrastThreshold: 100,
    primary: {
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffe54c',
      main: '#ffb300',
      dark: '#c68400',
      contrastText: '#000000',
    },
  },
  spacing: (factor) => `${0.5 * factor}em`,
  typography: {
    fontSize: 14,
    htmlFontSize: 14,
    fontFamily: [
      'Futura BK BT',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
