import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import MainNavigation from "./components/Navigation/MainNavigation";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <MainNavigation />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
