import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

// import HomeRoute from './containers/HomeRoute';
// import LeagueRoute from './containers/LeagueRoute';
// import CreateLeagueRoute from './containers/CreateLeagueRoute';
// import LeagueUseInviteRoute from './containers/LeagueUseInviteRoute';

import { Feed, League, Settings } from './pages';
import routes from './utils/routes';

class Routes extends React.Component {
  route(Component) {
    const { style } = this.props;
    return props => <Component {...props} style={style} />;
  }

  render() {
    const { location } = this.props;

    return (
      <Switch location={location}>
        <Route exact path={routes.feed} render={this.route(Feed)} />

        {/* <Route exact path={routes.newLeague} component={CreateLeagueRoute} />
        <Route
          exact
          path={routes.leagueUseInvite()}
          component={LeagueUseInviteRoute}
        />
        <Route exact path={routes.leagueWithouSlug} component={LeagueRoute} />
        <Route path={routes.league()} component={LeagueRoute} /> */}

        <Route path={routes._leagues} render={this.route(League)} />
        <Route exact path={routes.settings} render={this.route(Settings)} />
      </Switch>
    );
  }
}

export default Routes;
