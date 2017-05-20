import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyAppBarComponent from './Components/MyAppBarComponent'
import MyFloatButtonComponent from './Components/MyFloatButtonComponent'
import MyGreetingComponent from './Components/MyGreetingComponent'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <MyAppBarComponent />
          <MyFloatButtonComponent />
          <MyGreetingComponent />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
