import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'glamorous';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import theme from './constants/theme';
import createStore from './redux/createStore';

const history = createBrowserHistory();
const { store, persistor } = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <App />
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
