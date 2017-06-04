import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import Root from './Root';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const theme = createMuiTheme({
  palette: createPalette({}),
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Root />
    </MuiThemeProvider>
  );
}

export default App;
