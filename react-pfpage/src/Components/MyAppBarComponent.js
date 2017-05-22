import React from 'react'
import AppBar from 'material-ui/AppBar'
import MyAppBarIconComponent from './MyAppBarIconComponent'
import MyAppBarDrawerComponent from './MyAppBarDrawerComponent'


const styles = {
  position: 'fixed'
}

const MyAppBarComponent = () => (
  <AppBar
    title="Portfolio"
    style={styles}
    zDepth={3}
    iconElementRight={<MyAppBarIconComponent />}
    iconElementLeft={<MyAppBarDrawerComponent />}
  />
)

export default MyAppBarComponent
