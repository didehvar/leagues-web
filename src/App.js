import 'typeface-roboto';
import 'url-search-params-polyfill';
import './index.css';
import 'react-virtualized/styles.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Routes from './utils/routes';

import Loading from './components/Loading';
import BottomNav from './components/BottomNav';

import HomeRoute from './containers/HomeRoute';
import LeagueRoute from './containers/LeagueRoute';
import SearchRoute from './containers/SearchRoute';
import ScrollToTop from './containers/ScrollToTop';
import SettingsRoute from './containers/SettingsRoute';
import CreateLeagueRoute from './containers/CreateLeagueRoute';
import StravaAuthHandler from './containers/StravaAuthHandler';
import LeagueUseInviteRoute from './containers/LeagueUseInviteRoute';

import * as Style from './style';
import CssBaseline from '@material-ui/core/CssBaseline';

const LeaguePage = Loadable({
  loader: () => import('./pages/League'),
  loading: Loading,
});

const App = () => (
  <Style.Container>
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

      <Route exact path={Routes.settings} component={SettingsRoute} />

      <Route path={Routes._leagues} component={LeaguePage} />
    </Switch>

    <Style.FooterNav>
      <BottomNav />
    </Style.FooterNav>
  </Style.Container>
);

export default App;
