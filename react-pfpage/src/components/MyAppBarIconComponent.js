import React from 'react'
import IconButton from 'material-ui/IconButton'
import {indigo50} from 'material-ui/styles/colors'


const iconStyles = {
  iconHoverColor: indigo50,
}
const urls = {
  gh: 'https://github.com/4edorov',
  fb: 'https://www.facebook.com/alexander.fedorov.948'
}
const MyAppBarIcon = () => (
  <div>
    <IconButton
      iconClassName="fa fa-github"
      href={urls.gh}
      iconStyle={iconStyles}
    />
    <IconButton
      iconClassName="fa fa-facebook-official"
      href={urls.fb}
      iconStyle={iconStyles}
    />
  </div>
)

export default MyAppBarIcon
