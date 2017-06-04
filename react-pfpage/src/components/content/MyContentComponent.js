import React from 'react'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import MyContentGreetingComponent from './content/MyContentGreetingComponent'
import MyContentAboutComponent from './content/MyContentAboutComponent'
import MyContentPortfolioComponent from './content/MyContentPortfolioComponent'


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
          <Divider/>
          <MyContentAboutComponent/>
          <Divider/>
          <MyContentPortfolioComponent/>
        </Paper>
      </div>
    </div>
  )
}

export default MyContentComponent
