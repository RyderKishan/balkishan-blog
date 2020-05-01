import { makeStyles } from '@material-ui/core';

const headerTextSize = {
  xs: 'large',
  sm: 'x-large',
  md: 'xx-large',
  lg: 'xxx-large',
  xl: 'xxx-large',
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  header: {
    fontSize: (props) => `${headerTextSize[props.width]}`,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  fabIcon: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

export default useStyles;
