/* eslint-disable react/no-array-index-key */
import React from 'react';
import cn from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import useStyles from './styles';
import { apps } from './constants';
import { useWidth } from '../../utils';

const MyApps = () => {
  const classes = useStyles({
    width: useWidth(),
  });
  const [expanded, setExpanded] = React.useState('');
  const handleExpand = (id) => {
    setExpanded(id === expanded ? '' : id);
  };
  const renderCard = (cardProps) => (
    <Card key={cardProps.id} className={classes[cardProps.cardClass]}>
      <CardHeader
        avatar={(
          <Avatar aria-label="avatar" className={classes[cardProps.avatarClass]}>
            {cardProps.avatar}
          </Avatar>
          )}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
          )}
        title={cardProps.title}
        subheader={cardProps.subheader}
      />
      <CardMedia
        className={classes[cardProps.cardMediaClass]}
        image={cardProps.image}
        title={cardProps.imageTitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {cardProps.cardContent}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="view app"
          onClick={() => window.open(cardProps.href)}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          className={cn(classes.expand, {
            [classes.expandOpen]: expanded === cardProps.id,
          })}
          onClick={() => handleExpand(cardProps.id)}
          aria-expanded={expanded === cardProps.id}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse
        in={expanded === cardProps.id}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          {
            cardProps.paragraphs.map((text, index) => (
              <Typography key={index} paragraph>{text}</Typography>
            ))
          }
        </CardContent>
      </Collapse>
    </Card>
  );
  return (
    <div className={classes.root}>
      {
        apps.map((cardProps) => renderCard(cardProps))
      }
    </div>
  );
};

export default MyApps;
