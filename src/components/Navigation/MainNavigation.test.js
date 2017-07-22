import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import MainNavigation from './MainNavigation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiThemeProvider>
      <BrowserRouter>
        <MainNavigation />
      </BrowserRouter>
    </MuiThemeProvider>,
    div
  );
});
