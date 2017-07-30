import React from 'react';
import createMuiTheme from 'material-ui/styles/theme';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme();

export default function AppWrapper({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
