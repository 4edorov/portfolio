import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import CommunicationTextsms from 'material-ui/svg-icons/communication/textsms'


const styles = {
  position: 'absolute',
  right: 20,
  bottom: 20
}

const MyFloatButtonComponent = () => (
  <FloatingActionButton style={styles}>
    <CommunicationTextsms />
  </FloatingActionButton>
)

export default MyFloatButtonComponent
