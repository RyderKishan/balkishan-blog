import React from 'react';
import { Typography, Divider } from '@material-ui/core';

import { useWidth } from '../../utils';
import useStyles from './styles';
import { allPages } from './constants';

const About = () => {
  const classes = useStyles({
    width: useWidth(),
  });
  return (
    <div className={classes.root}>
      {
        allPages.map((page) => (
          <div key={page.id} className={classes.paragraphSection}>
            <Typography variant={page.headingVariant}>
              {page.heading}
            </Typography>
            {page.paragraphs.map((para) => (
              <div key={para.heading}>
                {
                  para.heading && (
                    <Typography
                      variant={para.headingVariant}
                    >
                      {para.heading}
                    </Typography>
                  )
                }
                <Typography>
                  {para.text}
                </Typography>
              </div>
            ))}
            <Divider />
          </div>
        ))
      }
    </div>
  );
};

export default About;
