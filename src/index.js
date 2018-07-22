import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router-dom/Router';
import { PersistGate } from 'redux-persist/integration/react';
import createBrowserHistory from 'history/createBrowserHistory';

import { ThemeProvider } from 'glamorous';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import theme from './utils/theme';
import createStore from './redux/createStore';

const history = createBrowserHistory();
const { store, persistor } = createStore(history);

const styleNode = document.createComment('insertion-point-jss');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'insertion-point-jss';

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <StyledThemeProvider theme={theme}>
              <Router history={history}>
                <App />
              </Router>
            </StyledThemeProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  </JssProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
