import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { lime, deepOrange } from 'material-ui/styles/colors';
import App from './App';
import './index.css';


const theme = createMuiTheme({
  palette: createPalette({
    primary: lime,
    accent: deepOrange,
  }),
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
