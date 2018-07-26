import 'url-search-params-polyfill';
import './index.css';
import 'react-virtualized/styles.css';

import React from 'react';
import Router from 'react-router-dom/Router';
import CssBaseline from '@material-ui/core/CssBaseline';
import WebFont from 'webfontloader';

import Routes from './Routes';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500'],
  },
});

class App extends React.Component {
  render() {
    const { loading, history } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <Router history={history} loading={loading}>
          <Routes />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
