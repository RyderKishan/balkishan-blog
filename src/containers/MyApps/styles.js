import { makeStyles } from '@material-ui/core';

const responsive = {
  xs: {
    columns: 1,
    margin: 0,
  },
  sm: {
    columns: 1,
    margin: 1,
  },
  md: {
    columns: 2,
    margin: 2,
  },
  lg: {
    columns: 2,
    margin: 3,
  },
  xl: {
    columns: 3,
    margin: 3,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: (props) => `repeat(${responsive[props.width].columns}, auto)`,
    flexWrap: 'wrap',
    margin: (props) => `0 ${(responsive[props.width].margin) * 5}%`,
  },
  cardRoot: {
    margin: theme.spacing(3),
  },
  media: {
    height: 0,
    backgroundSize: 'contain',
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
}));

export default useStyles;
