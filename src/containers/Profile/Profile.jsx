import React from 'react';
import cn from 'classnames';
import Avatar from '@material-ui/core/Avatar';

import { useWidth } from '../../utils';
import useStyles from './styles';

const Profile = () => {
  const classes = useStyles({
    screenHeight: window.innerHeight,
    width: useWidth(),
  });
  return (
    <div className={classes.root}>
      <div
        className={cn(
          classes.fullPageContainer,
          classes.headerCut,
          classes.personal,
        )}
      >
        <Avatar
          alt="Balkishan S"
          className={classes.avatar}
          src="/public/images/profile.png"
        />
        <span className={classes.name}>
          Balkishan S
        </span>
        <span className={classes.designation}>
          Senior Software Engineer
        </span>
        <span className={classes.company}>
          Freshworks
        </span>
      </div>
      <div
        className={classes.fullPageContainer}
      >
        <Avatar
          alt="Balkishan S"
          className={classes.avatar}
          src="/public/images/profile.png"
        />
        Second Scerrn
      </div>
    </div>
  );
};

export default Profile;
