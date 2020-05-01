import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Profile from '../Profile';
import About from '../About';
import MyApps from '../MyApps';
import Header from '../../components/Header';
import FallBack from '../../components/FallBack';
import Example from '../Example';

import useStyles from './styles';
import './KishanUi.css';

const KishanUi = () => {
  const classes = useStyles();
  return (
    <div id="KishanUi">
      <Header />
      <main className={classes.main}>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/example" exact render={() => <Example />} />
          <Route path="/profile" exact render={() => <Profile />} />
          <Route path="/about" exact render={() => <About />} />
          <Route path="/myapps" exact render={() => <MyApps />} />
          <Route component={FallBack} />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(KishanUi);
