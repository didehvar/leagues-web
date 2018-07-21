import 'typeface-roboto';
import 'url-search-params-polyfill';
import './index.css';
import 'react-virtualized/styles.css';

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './Routes';
import BottomNav from './components/BottomNav';

import ScrollToTop from './containers/ScrollToTop';
import StravaAuthHandler from './containers/StravaAuthHandler';

import { Container } from './App.style';

const App = () => (
  <React.Fragment>
    <Container>
      <CssBaseline />
      <ScrollToTop />
      <StravaAuthHandler />
      <Routes />
    </Container>

    <BottomNav />
  </React.Fragment>
);

export default App;
