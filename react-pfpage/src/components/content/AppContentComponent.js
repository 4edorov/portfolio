import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import ContentGreetingComponent from './ContentGreetingComponent';
import ContentAboutComponent from './ContentAboutComponent';
import ContentPortfolioComponent from './ContentPortfolioComponent';
import { changeStateApp } from '../../actions';
import { STATE_APP } from '../../config/AppConfig';
import Divider from 'material-ui/Divider';


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

const mapDispatchToProps = (dispatch) => ({
  changeStateApp(mode) {
    dispatch(changeStateApp(mode));
  },
});

class AppContentComponent extends React.Component {
  listenEventScroll = (event) => {
    let greetingPosTop = event.target.all.greeting.getBoundingClientRect().top;
    let aboutMePosTop = event.target.all['about-me'].getBoundingClientRect().top;
    if (greetingPosTop <= 0) {
      this.props.changeStateApp(STATE_APP[0]);
    }
    if (aboutMePosTop <= 0) {
      this.props.changeStateApp(STATE_APP[1]);
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenEventScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenEventScroll);
  }

  render () {
    return (
      <div className={this.props.classes.appContent} ref="content">
        <ContentGreetingComponent />
        <Divider />
        <ContentAboutComponent />
        <Divider />
        <ContentPortfolioComponent />
      </div>
    );
  }
}

AppContentComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppContentComponent));
