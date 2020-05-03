import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Hidden, IconButton, Menu, MenuItem, Fade, InputBase, Grow,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


import links from './constants';
import useStyles from './styles';

const Header = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onLinkClick = (href) => {
    window.location.href = href;
  };
  return (
    <header className={classes.root}>
      <img
        alt="logo"
        className={classes.image}
        role="none"
        onClick={() => history.push('/')}
        src="/public/images/gk_logo.png"
      />
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Hidden only="xs">
        <div className={classes.links}>
          {
            links.map((link) => (
              <Grow in key={link.id} timeout={{ enter: 500 }}>
                <span
                  role="none"
                  onClick={() => onLinkClick(link.href)}
                >
                  {link.name}
                </span>
              </Grow>
            ))
          }
        </div>
      </Hidden>
      <Hidden smUp>
        <IconButton
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {
            links.map((link) => (
              <MenuItem
                key={link.id}
                onClick={() => onLinkClick(link.href)}
              >
                {link.name}
              </MenuItem>
            ))
          }
        </Menu>
      </Hidden>
    </header>
  );
};

export default Header;
