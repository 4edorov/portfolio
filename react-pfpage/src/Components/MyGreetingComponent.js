import React from 'react'
import Paper from 'material-ui/Paper'
import bgImage from '../Assets/Static/Images/Savonlinna.jpg'


const styles = {
  div:{
    paddingTop: 64,
    backgroundImage: `url(${bgImage})`,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 600,
    justifyContent: 'space-around',
    alignItems: 'baseline'
  },
  paperLeft:{
    height: 100,
    width: 300,
    margin: 20,
    textAlign: 'center',
    padding: 10
  },
  paperRight:{
    height: 200,
    width: 300,
    margin: 20,
    textAlign: 'center',
    padding: 10
  }
};

const MyGreetingComponent = () => {
  return (
    <div>
      <div style={styles.div}>
        <Paper zDepth={3} style={styles.paperLeft}>
          <h4>First Vertical component</h4>
        </Paper>
        <Paper zDepth={3} style={styles.paperRight}>
          <h4>Second Vertical component</h4>
        </Paper>
      </div>
    </div>
  )
}

export default MyGreetingComponent
