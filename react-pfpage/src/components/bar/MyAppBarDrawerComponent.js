import React from 'react'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import {indigo50} from 'material-ui/styles/colors'
import MyAppBarInfoComponent from './MyAppBarInfoComponent'


const iconStyles = {
  iconHoverColor: indigo50
}

export default class MyAppBarDrawerComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  render() {
    return (
      <div>
        <IconButton
          iconClassName="fa fa-bars"
          iconStyle={iconStyles}
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MyAppBarInfoComponent />
        </Drawer>
      </div>
    )
  }
}
