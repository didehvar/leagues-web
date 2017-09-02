import 'typeface-roboto';
import 'url-search-params-polyfill';

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'glamorous';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './utils/routes';

import theme from './constants/theme';

import BottomNav from './components/BottomNav';
import HomeRoute from './containers/HomeRoute';
import LeagueRoute from './containers/LeagueRoute';
import SearchRoute from './containers/SearchRoute';
import ScrollToTop from './containers/ScrollToTop';
import CreateLeagueRoute from './containers/CreateLeagueRoute';
import StravaAuthHandler from './containers/StravaAuthHandler';

import * as Style from './style';

const routes = [
  {
    path: Routes.home,
    component: HomeRoute
  },
  {
    path: Routes.search,
    component: SearchRoute
  },
  {
    path: Routes.newLeague,
    component: CreateLeagueRoute
  },
  {
    path: Routes.league(),
    component: LeagueRoute
  }
];

class App extends Component {
  renderRoute = ({ tag: Tag, path, exact = true, component }) => (
    <Tag key={path} exact={exact} path={path} component={component} />
  );

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <ScrollToTop>
              <Style.Container>
                <StravaAuthHandler />

                <Switch>
                  {routes.map(
                    ({
                      route: RouteComponent = Route,
                      path,
                      exact = true,
                      component
                    }) => (
                      <RouteComponent
                        key={path}
                        exact={exact}
                        path={path}
                        component={component}
                      />
                    )
                  )}
                </Switch>

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
