import 'url-search-params-polyfill';
import './index.css';
import 'react-virtualized/styles.css';

import React from 'react';
import Router from 'react-router-dom/Router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Transition, animated } from 'react-spring';
import WebFont from 'webfontloader';

import Routes from './Routes';
import FullPageLoading from './components/UI/FullPageLoading';

WebFont.load({
  google: {
    families: ['Roboto'],
  },
});

class App extends React.Component {
  render() {
    const { loading, history } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <Transition
          native
          keys={loading ? 'loading' : 'loaded'}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {style => (
            <animated.div style={style}>
              {loading ? (
                <FullPageLoading />
              ) : (
                <Router history={history}>
                  <Routes />
                </Router>
              )}
            </animated.div>
          )}
        </Transition>
      </React.Fragment>
    );
  }
}

export default App;
