import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import { Div } from 'glamorous';

import theme from './constants/theme';
import Routes from './utils/routes';
import ScrollToTop from './containers/ScrollToTop';
import HomeRoute from './containers/HomeRoute';
import BottomNav from './components/BottomNav';
// import LeaguesRoute from './containers/LeaguesRoute';
// import NewLeagueRoute from './containers/NewLeagueRoute';
// import NewLeagueSegmentRoute from './containers/NewLeagueSegmentRoute';

import * as Style from './style';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop>
            <Style.Container>
              <Switch>
                <Route exact path={Routes.home} component={HomeRoute} />
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

              <Div>
                <BottomNav />
              </Div>
            </Style.Container>
          </ScrollToTop>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
