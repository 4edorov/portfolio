import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import ContentGreetingComponent from './ContentGreetingComponent';
import ContentAboutComponent from './ContentAboutComponent';


const styleSheet = createStyleSheet('AppContentComponent', {
  appContent: {
    '@media (min-width: 1280px)': {
      width: 'calc(100% - 290px)',
      left: 290,
    },
    position: 'relative',
  },
});

const mapStateToProps = (state) => ({
  stateApp: state.stateApp
});

const AppContentComponent = (props) => {
  const classes = props.classes;
  return (
    <div className={classes.appContent}>
      <ContentGreetingComponent />
      <ContentAboutComponent />
    </div>
  );
};

AppContentComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styleSheet)(AppContentComponent));
