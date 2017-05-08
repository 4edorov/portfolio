import React from 'react'
import AppBar from 'material-ui/AppBar'
import MyAppBarIconComponent from './MyAppBarIconComponent'


const MyAppBarComponent = () => (
  <AppBar
    title="Portfolio"
    iconElementRight={<MyAppBarIconComponent />}
  />
)

export default MyAppBarComponent