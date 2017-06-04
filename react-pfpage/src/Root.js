import React from 'react';
import AppBarComponent from './components/bar/AppBarComponent';
import AppDrawerComponent from './components/bar/AppDrawerComponent';
// import MyFloatButtonComponent from './components/MyFloatButtonComponent';
// import MyContentComponent from './components/MyContentComponent';


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawer: false,
    };
  }

  updateDimension = () => {
    window.innerWidth < 960 ?
      this.setState({isDrawer: false}) : this.setState({isDrawer: true})
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
        <AppDrawerComponent  open={this.state.isDrawer} docked={true} />
      </div>
    );
  }
};

export default Root;
