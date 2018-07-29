import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createBrowserHistory from 'history/createBrowserHistory';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider } from 'styled-components';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';

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

console.log(theme);

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {loaded => <App loading={!loaded} history={history} />}
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
