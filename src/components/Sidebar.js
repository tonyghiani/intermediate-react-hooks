import { Fragment } from 'react';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { DRAWER_WIDTH, TOPIC_LIST } from '../config';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  title: {
    fontWeight: 900,
    fontSize: 28,
  },
  sectionLabel: {
    fontWeight: 900,
    fontSize: 20,
  },
}));

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

export default function Sidebar() {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      anchor='left'
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <ListItem>
          <Typography variant='body1' className={classes.title}>
            Intermediate React
          </Typography>
        </ListItem>
        {TOPIC_LIST.map(({ title, topics }, pos) => (
          <Fragment key={pos}>
            <Divider />
            <ListItem>
              <Typography variant='body2' className={classes.sectionLabel}>
                {title}
              </Typography>
            </ListItem>
            {topics.map(({ href, name }, pos) => (
              <ListItemLink key={pos} href={href}>
                <ListItemText primary={name} />
              </ListItemLink>
            ))}
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
}
