import 'typeface-roboto';
import 'url-search-params-polyfill';
import './index.css';
import 'react-virtualized/styles.css';

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'glamorous';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from '../../utils/routes';
import createStore from '../../redux/createStore';

import theme from '../../constants/theme';

import BottomNav from '../../components/BottomNav';

import HomeRoute from '../HomeRoute';
import LeagueRoute from '../LeagueRoute';
import SearchRoute from '../SearchRoute';
import ScrollToTop from '../ScrollToTop';
import SettingsRoute from '../SettingsRoute';
import CreateLeagueRoute from '../CreateLeagueRoute';
import StravaAuthHandler from '../StravaAuthHandler';

import * as Style from './style';

const history = createBrowserHistory();
const { store } = createStore(history);

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Style.Container>
            <ScrollToTop />
            <StravaAuthHandler />

            <Switch>
              <Route exact path={Routes.home} component={HomeRoute} />
              <Route exact path={Routes.search} component={SearchRoute} />
              <Route
                exact
                path={Routes.newLeague}
                component={CreateLeagueRoute}
              />
              <Route path={Routes.league()} component={LeagueRoute} />
              <Route exact path={Routes.settings} component={SettingsRoute} />
            </Switch>

            <Style.FooterNav>
              <BottomNav />
            </Style.FooterNav>
          </Style.Container>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  </Provider>
);

export default App;
