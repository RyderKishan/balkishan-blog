import React from 'react';
import cn from 'classnames';
import { Avatar, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import { useWidth } from '../../utils';
import useStyles from './styles';
import { socialMedia } from './constants';

const icons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  github: GitHubIcon,
  gmail: MailIcon,
  linkedin: LinkedInIcon,
};

const Profile = () => {
  const classes = useStyles({
    screenHeight: window.innerHeight,
    width: useWidth(),
  });
  const onIconClick = (url) => {
    window.open(url, '_blank');
  };
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
        <div className={classes.social}>
          {
            socialMedia.map((soc) => {
              const Icon = icons[soc.id];
              return (
                <div
                  className={classes.socialItem}
                  key={soc.id}
                >
                  <IconButton onClick={() => onIconClick(soc.url)}>
                    <Icon
                      style={{
                        color: soc.color,
                      }}
                      fontSize="large"
                    />
                  </IconButton>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
