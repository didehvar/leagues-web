import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'glamorous';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'typeface-roboto';

import './utils/flags';
import Routes from './utils/routes';

import { theme, muiTheme } from './constants/theme';

import ScrollToTop from './containers/ScrollToTop';
import BottomNav from './components/BottomNav';
import HomeRoute from './containers/HomeRoute';
import SearchRoute from './containers/SearchRoute';
import LeagueRoute from './containers/LeagueRoute';
// import LeaguesRoute from './containers/LeaguesRoute';
// import NewLeagueRoute from './containers/NewLeagueRoute';
// import NewLeagueSegmentRoute from './containers/NewLeagueSegmentRoute';

import * as Style from './style';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <ScrollToTop>
              <Style.Container>
                <Style.BodyWrapper>
                  <Switch>
                    <Route exact path={Routes.home} component={HomeRoute} />
                    <Route exact path={Routes.search} component={SearchRoute} />
                    <Route
                      exact
                      path={Routes.league()}
                      component={LeagueRoute}
                    />
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

                <Style.NavWrapper>
                  <BottomNav />
                </Style.NavWrapper>
              </Style.Container>
            </ScrollToTop>
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
