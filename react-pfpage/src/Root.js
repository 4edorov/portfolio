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
      isDocked: false,
    };
  }

  updateDimension = () => {
    window.innerWidth < 1280 ?
      this.setState({isDrawer: false, isDocked: false}) : this.setState({isDrawer: true, isDocked: true})
  }
  componentDidMount() {
    this.updateDimension();
    window.addEventListener("resize", this.updateDimension);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension);
  }

  render () {
    const classes = this.props.classes;
    return (
      <div>
        <AppBarComponent menu={this.state.isDrawer}/>
        <AppDrawerComponent open={this.state.isDrawer} docked={this.state.isDocked} />
      </div>
    );
  }
};

export default Root;
