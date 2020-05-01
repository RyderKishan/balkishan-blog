import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  social: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  socialItem: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    display: 'grid',
  },
  personal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    placeContent: 'center',
  },
  fullPageContainer: {
    height: (props) => `calc(${props.screenHeight}px - 2em)`,
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export default useStyles;
