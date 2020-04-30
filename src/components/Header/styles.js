import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.background.paper,
    height: theme.spacing(10),
    boxShadow: theme.shadows[3],
    padding: `0 ${theme.spacing(2)}`,
  },
  image: {
    height: theme.spacing(6),
  },
}));

export default useStyles;
