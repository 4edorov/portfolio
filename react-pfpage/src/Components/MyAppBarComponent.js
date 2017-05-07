import React from 'react'
import AppBar from 'material-ui/AppBar'
import MyAppBarIconComponent from './MyAppBarIconComponent'


function handleTouchTap() {
  alert('Hello')
}

const MyAppBarComponent = () => (
  <AppBar
    title="Portfolio"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementRight={<MyAppBarIconComponent />}
    onRightIconButtonTouchTap={handleTouchTap}
  />
)

export default MyAppBarComponent