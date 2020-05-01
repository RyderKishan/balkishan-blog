import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      background: theme.palette.background.default,
    },
  },
  main: {
    color: theme.palette.text.primary,
  },
  image: {
    height: theme.spacing(6),
  },
}));

export default useStyles;
