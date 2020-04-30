import { makeStyles } from '@material-ui/core';

const welcomeTextFontSize = {
  xs: 'large',
  sm: 'x-large',
  md: 'xx-large',
  lg: 'xxx-large',
  xl: 'xxx-large',
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  fullPageContainer: {
    height: (props) => `${props.screenHeight}px`,
    display: 'grid',
    placeContent: 'center',
    width: '100%',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  headerCut: {
    height: (props) => `calc(${props.screenHeight}px - 5em)`,
  },
  welcomeTextResponsible: {
    fontSize: (props) => welcomeTextFontSize[props.width],
  },
  fabIcon: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

export default useStyles;
