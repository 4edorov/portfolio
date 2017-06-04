import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import CommunicationTextsms from 'material-ui/svg-icons/communication/textsms'


const styles = {
  position: 'fixed',
  right: 40,
  bottom: 40
}

const MyFloatButtonComponent = () => (
  <FloatingActionButton style={styles}>
    <CommunicationTextsms />
  </FloatingActionButton>
)

export default MyFloatButtonComponent
