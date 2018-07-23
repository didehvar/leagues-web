import 'typeface-roboto';
import 'url-search-params-polyfill';
import './index.css';
import 'react-virtualized/styles.css';

import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Transition } from 'react-spring';
import Route from 'react-router-dom/Route';

import { getUserAuthenticated } from './ducks/users';
import Routes from './Routes';
import BottomNav from './components/BottomNav';

import ScrollToTop from './containers/ScrollToTop';

import { Container, transitionClass } from './App.style';

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <ScrollToTop />

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

        <Route component={BottomNav} />
      </React.Fragment>
    );
  }
}

export default App;
