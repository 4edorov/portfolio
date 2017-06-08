import React from 'react';
import { connect } from 'react-redux';
import AppBarComponent from './components/bar/AppBarComponent';
import AppDrawerComponent from './components/bar/AppDrawerComponent';
import { toggleDrawer } from './actions';


const mapStateToProps = (state) => ({
  open: state.stateDrawer
});

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer(open) {
    dispatch(toggleDrawer(open));
  }
});

class Root extends React.Component {
  updateDimension = () => {
    let open = window.innerWidth < 1280 ? false : true
    this.props.toggleDrawer(open);
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
        <AppBarComponent />
        <AppDrawerComponent open={this.props.open}/>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
