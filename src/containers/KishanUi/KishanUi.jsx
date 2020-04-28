import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import './KishanUi.css';
import Home from '../Home';
import Header from '../../components/Header';
import FallBack from '../../components/FallBack';

const KishanUi = () => {
  console.log('UI');
  return (
    <div className="KishanUi">
      <header>
        <Header />
      </header>
      <article className="body">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/contact" render={() => <div className="Contact">Contact</div>} />
          <Route path="/about" render={() => <div className="About">About</div>} />
          <Route component={FallBack} />
        </Switch>
        <footer>
          C @ Balkishan S
        </footer>
      </article>
    </div>
  );
};

export default withRouter(KishanUi);
