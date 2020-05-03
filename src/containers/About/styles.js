import { makeStyles } from '@material-ui/core';

const responsiveStyles = {
  xs: {
    margin: 2,
  },
  sm: {
    margin: 8,
  },
  md: {
    margin: 24,
  },
  lg: {
    margin: 36,
  },
  xl: {
    margin: 48,
  },
};


const useStyles = makeStyles((theme) => ({
  root: {
    margin: (props) => `${theme.spacing(2)} ${theme.spacing(responsiveStyles[props.width].margin)}`,
  },
  paragraphSection: {
    marginBottom: theme.spacing(2),
    '& > div': {
      marginBottom: theme.spacing(2),
    },
    '& :first-child': {
      marginBottom: theme.spacing(1),
    },
  },
}));

export default useStyles;
