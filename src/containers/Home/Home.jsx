import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import cn from 'classnames';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { useWidth } from '../../utils';

import useStyles from './styles';
import { sections } from './constants';

const Home = () => {
  const [scroll, setScroll] = useState(1);
  const classes = useStyles({
    screenHeight: window.innerHeight,
    width: useWidth(),
  });
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
        sections.map((section, index) => (
          <div
            className={cn({
              [classes.fullPageContainer]: true,
              [classes.headerCut]: index === 0,
            })}
            key={section.id}
            id={section.id}
          >
            <div className={classes.welcomeTextResponsible}>
              {section.name}
            </div>
          </div>
        ))
      }
    </div>
  );
};

// Home.defaultProps = {
//   width: '',
// };

// Home.propTypes = {
//   width: PropTypes.string,
// };

export default Home;