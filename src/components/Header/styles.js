import { makeStyles, fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.text.primary,
    alignItems: 'center',
    background: theme.palette.background.paper,
    height: theme.spacing(10),
    boxShadow: theme.shadows[3],
    padding: `0 ${theme.spacing(2)}`,
  },
  sticky: {
    position: 'sticky',
    top: 0,
    opacity: 0.95,
    animation: `$enter 0.5s ${theme.transitions.easing.easeInOut}`,
  },
  '@keyframes enter': {
    '0%': {
      opacity: 0,
      top: -50,
    },
    '100%': {
      opacity: 0.95,
      top: 0,
    },
  },
  image: {
    height: theme.spacing(6),
    cursor: 'pointer',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: `0 ${theme.spacing(2)}`,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  links: {
    '& span': {
      marginLeft: theme.spacing(2),
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
