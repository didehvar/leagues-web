import React, { Component } from 'react';
import MainNavigation from '..//Navigation/MainNavigation';
import Router from '../Router/Router';
import AppWrapper from './AppWrapper';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <div>
          <Router />
          <MainNavigation />
        </div>
      </AppWrapper>
    );
  }
}

export default App;
