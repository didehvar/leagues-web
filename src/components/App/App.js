import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import MainNavigation from '..//Navigation/MainNavigation';
import Router from '../Router/Router';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <MainNavigation />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
