import 'typeface-roboto';
import 'url-search-params-polyfill';
import './index.css';
import 'react-virtualized/styles.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './utils/routes';

import BottomNav from './components/BottomNav';

import HomeRoute from './containers/HomeRoute';
import LeagueRoute from './containers/LeagueRoute';
import SearchRoute from './containers/SearchRoute';
import ScrollToTop from './containers/ScrollToTop';
import CreateLeagueRoute from './containers/CreateLeagueRoute';
import StravaAuthHandler from './containers/StravaAuthHandler';
import LeagueUseInviteRoute from './containers/LeagueUseInviteRoute';

import * as pages from './pages';

import { Container } from './App.style';

const App = () => (
  <React.Fragment>
    <Container>
      <CssBaseline />
      <ScrollToTop />
      <StravaAuthHandler />

      <Switch>
        <Route exact path={Routes.home} component={HomeRoute} />
        <Route exact path={Routes.search} component={SearchRoute} />

        <Route exact path={Routes.newLeague} component={CreateLeagueRoute} />
        <Route
          exact
          path={Routes.leagueUseInvite()}
          component={LeagueUseInviteRoute}
        />
        <Route exact path={Routes.leagueWithouSlug} component={LeagueRoute} />
        <Route path={Routes.league()} component={LeagueRoute} />

        <Route path={Routes._leagues} component={pages.League} />
        <Route exact path={Routes.settings} component={pages.Settings} />
      </Switch>
    </Container>

    <BottomNav />
  </React.Fragment>
);

export default App;
