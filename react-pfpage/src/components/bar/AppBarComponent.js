import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';


// import MyAppBarIconComponent from './MyAppBarIconComponent'
// import MyAppBarDrawerComponent from './MyAppBarDrawerComponent'
const styleSheet = createStyleSheet('AppBarComponent', {
  appBar: {
    '@media (min-width: 1280px)': {
      width: 'calc(100% - 290px)',
      left: 290,
    },
  },
});

const AppBarComponent = (props) => {
  const classes = props.classes;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {!  props.menu &&
          <IconButton contrast>
            <MenuIcon />
          </IconButton>
        }
      </Toolbar>
    </AppBar>
  );
};

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppBarComponent);