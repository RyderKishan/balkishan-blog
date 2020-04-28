import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import KishanUi from './containers/KishanUi';

ReactDOM.render(
  <BrowserRouter>
    <KishanUi />
  </BrowserRouter>,
  document.getElementById('app'),
);
