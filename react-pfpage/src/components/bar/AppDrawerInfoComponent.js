import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import weberPhoto from '../../assets/static/images/Avatar.jpg';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Face from 'material-ui-icons/Face';
import Email from 'material-ui-icons/Email';
import ArtTrack from 'material-ui-icons/ArtTrack';
import Business from 'material-ui-icons/Business';
import Directions from 'material-ui-icons/Directions';
import Contacts from 'material-ui-icons/Contacts';


const styleSheet = createStyleSheet('AppDrawerInfoComponent', theme => ({
  avatar: {
    width: 250,
    height: 250,
    margin: 20,
  },
  list: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  mailto: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  },
  begin: {
    marginTop: 64,
  },
}));

function AppDrawerInfoComponent(props) {
  const classes = props.classes;
  return (
    <div>
      <div className={classes.begin}>
        <Divider />
      </div>
      <Avatar
        alt="Alexander Fedorov"
        src={weberPhoto}
        className={classes.avatar}
      />
      <div className={classes.list}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Face />
            </ListItemIcon>
            <ListItemText primary="Alexander Fedorov" secondary="frontend developer" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary={<a className={classes.mailto} href="mailto:4edorov@gmail.com">4edorov@gmail.com</a>} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button={true}>
            <ListItemIcon>
              <ArtTrack />
            </ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItem>
        </List>
        <List>
          <ListItem button={true}>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>
        </List>
        <List>
          <ListItem button={true}>
            <ListItemIcon>
              <Directions />
            </ListItemIcon>
            <ListItemText primary="My Way" />
          </ListItem>
        </List>
        <List>
          <ListItem button={true}>
            <ListItemIcon>
              <Contacts />
            </ListItemIcon>
            <ListItemText primary="Contact Me" />
          </ListItem>
        </List>
        <Divider />
      </div>
    </div>
  )
}

AppDrawerInfoComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppDrawerInfoComponent);
