import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import {indigo50, indigo900} from 'material-ui/styles/colors'


const iconStyles = {
  paddingLeft: 5,
  paddingTop: 12,
}

const MyAppBarIcon = () => (
  <div>
    <FontIcon
      className="fa fa-github"
      style={iconStyles}
      color={indigo50}
      hoverColor={indigo900}
    />
    <FontIcon
      className="fa fa-facebook-square"
      style={iconStyles}
      color={indigo50}
      hoverColor={indigo900}
    />
  </div>
)

export default MyAppBarIcon