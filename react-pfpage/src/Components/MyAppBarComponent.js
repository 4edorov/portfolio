import React from 'react'
import AppBar from 'material-ui/AppBar'
import MyAppBarIconComponent from './MyAppBarIconComponent'
import MyAppBarDrawerComponent from './MyAppBarDrawerComponent'


const MyAppBarComponent = () => (
  <AppBar
    title="Portfolio"
    iconElementRight={<MyAppBarIconComponent />}
    iconElementLeft={<MyAppBarDrawerComponent />}
  />
)

export default MyAppBarComponent