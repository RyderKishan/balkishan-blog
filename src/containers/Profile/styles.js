import { makeStyles } from '@material-ui/core';

const responsiveStyles = {
  xs: {
    avatarHeight: 20,
    avatarWidth: 20,
    nameSize: '2.5em',
    designationSize: '2em',
    companySize: '1.75em',
  },
  sm: {
    avatarHeight: 24,
    avatarWidth: 24,
    nameSize: '3.5em',
    designationSize: '2.5em',
    companySize: '2em',
  },
  md: {
    avatarHeight: 24,
    avatarWidth: 24,
    nameSize: 'xxx-large',
    designationSize: 'xx-large',
    companySize: 'x-large',
  },
  lg: {
    avatarHeight: 24,
    avatarWidth: 24,
    nameSize: 'xxx-large',
    designationSize: 'xx-large',
    companySize: 'x-large',
  },
  xl: {
    avatarHeight: 24,
    avatarWidth: 24,
    nameSize: 'xxx-large',
    designationSize: 'xx-large',
    companySize: 'x-large',
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'grid',
    // gridTemplateColumns: (props) => `repeat(${responsiveColumns[props.width]}, auto)`,
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
  headerCut: {
    height: (props) => `calc(${props.screenHeight}px - 7em)`,
  },
  avatar: {
    margin: '0 auto',
    height: (props) => theme.spacing(responsiveStyles[props.width].avatarHeight),
    width: (props) => theme.spacing(responsiveStyles[props.width].avatarWidth),
    marginBottom: theme.spacing(2),
  },
  name: {
    fontSize: (props) => responsiveStyles[props.width].nameSize,
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
  },
  designation: {
    marginBottom: theme.spacing(0.5),
    fontSize: (props) => responsiveStyles[props.width].designationSize,
  },
  company: {
    fontSize: (props) => responsiveStyles[props.width].companySize,
  },
  fabIcon: {
    bottom: theme.spacing(4),
  },
}));

export default useStyles;
