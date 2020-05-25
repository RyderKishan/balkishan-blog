import React, { useState } from 'react';
import cn from 'classnames';
import { Fab, Zoom, Grow } from '@material-ui/core';
import fetch from 'node-fetch';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

import { useWidth } from '../../utils';
import useStyles from './styles';
import { sections } from './constants';
import config from '../../config';
// import { get } from '../../api';

const Home = () => {
  const [scroll, setScroll] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const classes = useStyles({
    screenHeight: window.innerHeight,
    width: useWidth(),
  });
  const getCount = (url) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }).then((response) => response.json())
      .then((count) => {
        setPageCount(count || 0);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getCount(`${config.API_LINK}/users/visit`);
  }, []);
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
          aria-label="scroll"
          onClick={() => {
            window.location.href = `#${sections[scroll].id}`;
            setScroll(scroll + 1 === sections.length ? 0 : (scroll + 1));
          }}
        >
          <ArrowDownward />
        </Fab>
      </Zoom>
      {
        (pageCount && pageCount > 0) ? (
          <div className={classes.pageViews}>
            {`Total Views - ${pageCount}`}
          </div>
        ) : null
      }
      {
        sections.map((section, index) => (
          <div
            className={cn({
              [classes.fullPageContainer]: true,
              [classes.headerCut]: index === 0,
            })}
            key={section.id}
            id={section.id}
          >
            <Grow in timeout={{ enter: 1000 }}>
              <div className={classes.welcomeTextResponsible}>
                {section.name}
              </div>
            </Grow>
          </div>
        ))
      }
    </div>
  );
};

export default Home;
