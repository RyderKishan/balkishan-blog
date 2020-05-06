import React from 'react';
import cn from 'classnames';
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
  const [fixedHeader, setHeader] = React.useState(false);
  const classes = useStyles({
    scroll: window.scrollY,
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onLinkClick = (href) => {
    window.location.href = href;
  };
  const onScroll = () => {
    const headerHeight = document.getElementById('app-header').offsetHeight;
    const { scrollY } = window;
    if (scrollY > headerHeight * 2 && !fixedHeader) {
      setHeader(true);
    } else if (fixedHeader && scrollY < headerHeight * 2) {
      setHeader(false);
    }
  };
  window.onscroll = onScroll;
  return (
    <header
      id="app-header"
      className={cn({
        [`${classes.root}`]: true,
        [`${classes.sticky}`]: fixedHeader,
      })}
    >
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
