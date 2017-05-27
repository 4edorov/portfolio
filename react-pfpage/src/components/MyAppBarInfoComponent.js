import React from 'react'
import Avatar from 'material-ui/Avatar'
import imageAvatar from '../../src/assets/static/images/Avatar.jpg'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import SocialMood from 'material-ui/svg-icons/social/mood'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import CommunicationChat from 'material-ui/svg-icons/communication/chat'
import CommunicationBusiness from 'material-ui/svg-icons/communication/business'
import CommunicationContacts from 'material-ui/svg-icons/communication/contacts'
import {green400} from 'material-ui/styles/colors'

const MyAppBarInfoComponent = () => (
  <div>
    <div style={{textAlign: 'center'}}>
      <Avatar
        src={imageAvatar}
        size={250}
      />
    </div>
    <List>
      <ListItem
        leftIcon={<SocialMood color={green400} />}
        primaryText="Alexander Fedorov"
      />
      <ListItem
        leftIcon={<CommunicationEmail color={green400} />}
        primaryText="4edorov@gmail.com"
      />
    </List>
    <Divider />
    <List>
      <ListItem
        leftIcon={<CommunicationChat color={green400} />}
        primaryText="About Me"
      />
      <ListItem
        leftIcon={<CommunicationBusiness color={green400} />}
        primaryText="Portfolio"
      />
      <ListItem
        leftIcon={<CommunicationContacts color={green400} />}
        primaryText="Contact"
      />
    </List>
  </div>
)

export default MyAppBarInfoComponent
