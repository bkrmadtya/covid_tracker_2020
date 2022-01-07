import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  CssBaseline,
  MuiThemeProvider,
  createTheme,
} from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

import './index.css';
import App from './App';

import store from 'store';

const THEME = createTheme({
  palette: {
    background: {
      default: blueGrey[50],
    },
  },
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial'].join(','),
    fontSize: 12,
  },
});


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <MuiThemeProvider theme={THEME}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  // </React.StrictMode>
  document.getElementById('root')
);
