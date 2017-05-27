import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyAppBarComponent from './components/MyAppBarComponent'
import MyFloatButtonComponent from './components/MyFloatButtonComponent'
import MyContentComponent from './components/MyContentComponent'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <MyAppBarComponent />
          <MyFloatButtonComponent />
          <MyContentComponent />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
