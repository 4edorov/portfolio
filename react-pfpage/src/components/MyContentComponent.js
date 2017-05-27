import React from 'react'
import Paper from 'material-ui/Paper'
import MyContentGreetingComponent from './content/MyContentGreetingComponent'


const styles = {
  paperBase:{
    paddingTop: 64,
    display: 'flex',
    flexDirection: 'columns',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  }
}

const MyContentComponent = () => {
  return (
    <div>
      <div style={styles.paperBase}>
        <Paper className="paper-main" zDepth={3}>
          <MyContentGreetingComponent/>
        </Paper>
      </div>
    </div>
  )
}

export default MyContentComponent
