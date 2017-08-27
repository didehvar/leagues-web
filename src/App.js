import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'glamorous';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'typeface-roboto';

import './utils/flags';
import Routes from './utils/routes';

import { theme, muiTheme } from './constants/theme';

import PaddedRoute from './components/PaddedRoute';

import BottomNav from './components/BottomNav';
import HomeRoute from './containers/HomeRoute';
import LeagueRoute from './containers/LeagueRoute';
import SearchRoute from './containers/SearchRoute';
import ScrollToTop from './containers/ScrollToTop';
import NewLeagueRoute from './containers/NewLeagueRoute';

// import LeaguesRoute from './containers/LeaguesRoute';
// import NewLeagueRoute from './containers/NewLeagueRoute';
// import NewLeagueSegmentRoute from './containers/NewLeagueSegmentRoute';

import * as Style from './style';

const routes = [
  {
    path: Routes.home,
    component: () => <HomeRoute />
  },
  {
    route: PaddedRoute,
    path: Routes.search,
    component: () => <SearchRoute />
  },
  {
    path: Routes.newLeague,
    component: () => <NewLeagueRoute />
  },
  {
    path: Routes.league(),
    component: () => <LeagueRoute />
  }
];

class App extends Component {
  renderRoute = ({ tag: Tag, path, exact = true, component }) =>
    <Tag key={path} exact={exact} path={path} component={component} />;

  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <ScrollToTop>
              <Style.Container>
                <Style.BodyWrapper>
                  <Switch>
                    {routes.map(
                      ({
                        route: RouteComponent = Route,
                        path,
                        exact = true,
                        component
                      }) =>
                        <RouteComponent
                          key={path}
                          exact={exact}
                          path={path}
                          component={component}
                        />
                    )}
                    {/* <Route exact path={Routes.leagues} component={LeaguesRoute} />
                    <Route
                      exact
                      path={Routes.newLeague}
                      component={NewLeagueRoute}
                    />
                    <Route
                      exact
                      path={Routes.newLeagueSegment}
                      component={NewLeagueSegmentRoute}
                    /> */}
                  </Switch>
                </Style.BodyWrapper>

                <Style.FooterFix />
                <Style.FooterNav>
                  <BottomNav />
                </Style.FooterNav>
              </Style.Container>
            </ScrollToTop>
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
