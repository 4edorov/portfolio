import React from 'react';
import { connect } from 'react-redux';
import AppBarComponent from './components/bar/AppBarComponent';
import AppDrawerComponent from './components/bar/AppDrawerComponent';
import { toggleDrawer, stateDrawer } from './actions';
import AppButtonComponent from './components/elements/AppButtonComponent';


const mapStateToProps = (state) => ({
  open: state.openDrawer,
  docked: state.dockedDrawer,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer(mode) {
    dispatch(toggleDrawer(mode));
  },
  stateDrawer(mode) {
    dispatch(stateDrawer(mode));
  },
});

class Root extends React.Component {
  updateDimension = () => {
    let mode = window.innerWidth < 1280 ? false : true;
    this.props.toggleDrawer(mode);
    this.props.stateDrawer(mode);
  }
  componentDidMount() {
    this.updateDimension();
    window.addEventListener("resize", this.updateDimension);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension);
  }
  render () {
    return (
      <div>
        <AppBarComponent overlay={!this.props.docked} />
        <AppDrawerComponent
          open={this.props.open}
          docked={this.props.docked}
        />
        <AppButtonComponent />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
