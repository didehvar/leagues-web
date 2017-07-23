import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import CreateSegments from './CreateSegments';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiThemeProvider>
      <BrowserRouter>
        <CreateSegments />
      </BrowserRouter>
    </MuiThemeProvider>,
    div
  );
});
