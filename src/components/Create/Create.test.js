import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import Create from './Create';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiThemeProvider>
      <BrowserRouter>
        <Create />
      </BrowserRouter>
    </MuiThemeProvider>,
    div
  );
});
