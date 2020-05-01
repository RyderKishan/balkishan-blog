import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import HomeIcon from '@material-ui/icons/Home';
import * as qs from 'qs';

import useStyles from './styles';
import { useWidth } from '../../utils';

const failureMessages = {
  BUILD: 'The page is under construction',
  NOT_FOUND: 'Particular content is not found',
  LOGGED_OUT: 'You have been logged out successfully',
  SESSION_EXPIRED: 'Your session is expired! Please reload',
};

const getErrorMessage = (location) => {
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  if (params.error) {
    const failureMessage = failureMessages[params.error];
    if (failureMessage) {
      return {
        text: failureMessage,
        code: `ERRCODE: ${params.error}`,
      };
    }
  }
  return {
    text: failureMessages.NOT_FOUND,
    code: 'ERRCODE: 404',
  };
};

const FallBack = ({ location }) => {
  const classes = useStyles({
    width: useWidth(),
  });
  const message = getErrorMessage(location);
  return (
    <div className={classes.root}>
      <Zoom
        in
        timeout={{
          enter: 500,
        }}
      >
        <Fab
          className={classes.fabIcon}
          color="secondary"
          aria-label="home"
          href="/"
        >
          <HomeIcon />
        </Fab>
      </Zoom>
      <div className={classes.header}>{message.code}</div>
      <div>{message.text}</div>
    </div>
  );
};

FallBack.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default FallBack;
