import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import KishanUi from './containers/KishanUi';
import themes from './themes';

const App = () => {
  const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={themes[mode]}>
        <BrowserRouter>
          <KishanUi />
        </BrowserRouter>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
