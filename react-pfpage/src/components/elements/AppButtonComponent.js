import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import ArrowForward from 'material-ui-icons/ArrowForward';
import Refresh from 'material-ui-icons/Refresh';
import { STATE_APP } from '../../config/AppConfig';
import { changeStateApp } from '../../actions';


const mapStateToProps = (state) => ({
  stateApp: state.stateApp,
});

const mapDispatchToProps = (dispatch) => ({
  changeStateApp(mode) {
    dispatch(changeStateApp(mode));
  },
});

const styleSheet = createStyleSheet('AppButtonComponent', {
  appButton: {
    position: 'fixed',
    right: 40,
    bottom: 40,
  },
});

const AppButtonComponent = (props) => {
  const classes = props.classes;
  let indexNextState = STATE_APP.indexOf(props.stateApp) + 1;
  if (indexNextState > 4) {
    indexNextState = 0;
  }
  let nextState = STATE_APP[indexNextState];
  const handleAppState = () => {
    props.changeStateApp(nextState);
  };
  return (
    <Button
      fab
      accent
      className={classes.appButton}
      onClick={() => {handleAppState()}}
    >
      {indexNextState === 0 ? <Refresh /> : <ArrowForward />}
    </Button>
  );
};

AppButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppButtonComponent));
