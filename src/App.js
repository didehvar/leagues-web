import 'typeface-roboto';
import 'url-search-params-polyfill';
import './index.css';
import 'react-virtualized/styles.css';

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Transition } from 'react-spring';
import Route from 'react-router-dom/Route';

import Routes from './Routes';
import BottomNav from './components/BottomNav';

import ScrollToTop from './containers/ScrollToTop';
import StravaAuthHandler from './containers/StravaAuthHandler';

import { Container, transitionClass } from './App.style';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <ScrollToTop />
    <StravaAuthHandler />

    <Container className={transitionClass}>
      <Route
        render={({ location }) => (
          <Transition
            native
            keys={location.pathname}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {style => <Routes style={style} location={location} />}
          </Transition>
        )}
      />
    </Container>

    <BottomNav />
  </React.Fragment>
);

export default App;
