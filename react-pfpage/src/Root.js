import React from 'react';
import AppBarComponent from './components/bar/AppBarComponent';
import AppDrawerComponent from './components/bar/AppDrawerComponent';
// import MyFloatButtonComponent from './components/MyFloatButtonComponent';
// import MyContentComponent from './components/MyContentComponent';


class Root extends React.Component {
  render () {
    return (
      <div>
        <AppBarComponent />
        <AppDrawerComponent
        />
      </div>
    );
  }
};

export default Root;
