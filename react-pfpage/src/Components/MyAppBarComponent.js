import React from 'react'
import AppBar from 'material-ui/AppBar'
import MyAppBarIconComponent from './MyAppBarIconComponent'

const MyAppBarComponent = () => (
  <AppBar
    title="Portfolio"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementRight={<MyAppBarIconComponent />}
  />
)

export default MyAppBarComponent