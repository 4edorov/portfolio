import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';


const styleSheet = createStyleSheet('AppContentComponent', {
  appContent: {

  },
});

const AppContentComponent = (props) => {
  const classes = props.classes;
  return (

  );
};

AppContentComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppContentComponent);
