import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyAppBarComponent from './Components/MyAppBarComponent'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MyAppBarComponent/>
      </MuiThemeProvider>
    )
  }
}

export default App
