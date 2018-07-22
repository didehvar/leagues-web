import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import withRouter from 'react-router-dom/withRouter';
import { Transition, config } from 'react-spring';

import HomeRoute from './containers/HomeRoute';
import LeagueRoute from './containers/LeagueRoute';
import SearchRoute from './containers/SearchRoute';
import CreateLeagueRoute from './containers/CreateLeagueRoute';
import LeagueUseInviteRoute from './containers/LeagueUseInviteRoute';

import { League, Settings } from './pages';
import routes from './utils/routes';

class Routes extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <Transition
        native
        keys={location.pathname}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {style => (
          <Switch location={location}>
            <Route
              exact
              path={routes.home}
              render={props => <HomeRoute {...props} style={style} />}
            />
            <Route exact path={routes.search} component={SearchRoute} />

            <Route
              exact
              path={routes.newLeague}
              component={CreateLeagueRoute}
            />
            <Route
              exact
              path={routes.leagueUseInvite()}
              component={LeagueUseInviteRoute}
            />
            <Route
              exact
              path={routes.leagueWithouSlug}
              component={LeagueRoute}
            />
            <Route path={routes.league()} component={LeagueRoute} />

            <Route
              path={routes._leagues}
              render={props => <League {...props} style={style} />}
            />
            <Route
              exact
              path={routes.settings}
              render={props => <Settings {...props} style={style} />}
            />
          </Switch>
        )}
      </Transition>
    );
  }
}

export default withRouter(Routes);
