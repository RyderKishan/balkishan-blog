import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <img
        alt="logo"
        className={classes.image}
        role="none"
        onClick={() => history.push('/')}
        src="/public/images/gk_logo.png"
      />
      <span>
        Blog
      </span>
    </header>
  );
};

export default Header;
