import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppDrawerInfoComponent from './AppDrawerInfoComponent';


class AppDrawerComponent extends React.Component {
  render() {
    return (
      <div>
        <Drawer open={true} docked={true}>
          <AppDrawerInfoComponent />
        </Drawer>
      </div>
    )
  }
}

export default AppDrawerComponent;
