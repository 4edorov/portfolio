import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../actions';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { URL_GIT_HUB, URL_FACEBOOK } from '../../config/AppConfig';


// import MyAppBarIconComponent from './MyAppBarIconComponent'
// import MyAppBarDrawerComponent from './MyAppBarDrawerComponent'


const styleSheet = createStyleSheet('AppBarComponent', {
  appBar: {
    '@media (min-width: 1280px)': {
      width: 'calc(100% - 290px)',
      left: 290,
    },
  },
  barToolIcons: {
    display: 'flex',
    flexBasis: '100%',
    justifyContent: 'flex-end',
  },
});

const mapStateToProps = (state) => ({
  open: state.openDrawer,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDrawer(mode) {
    dispatch(toggleDrawer(mode));
  },
});

const AppBarComponent = (props) => {
  const classes = props.classes;

  const handleDrawerOpen = () => {
    props.toggleDrawer(!props.open);
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {
          props.overlay &&
          <IconButton contrast onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        }
        <div className={classes.barToolIcons}>
          <IconButton contrast href={URL_GIT_HUB}>
            <Icon className="fa fa-github" />
          </IconButton>
          <IconButton contrast href={URL_FACEBOOK}>
            <Icon className="fa fa-facebook-official" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppBarComponent));
