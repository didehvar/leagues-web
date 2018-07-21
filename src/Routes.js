import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import withRouter from 'react-router-dom/withRouter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HomeRoute from './containers/HomeRoute';
import LeagueRoute from './containers/LeagueRoute';
import SearchRoute from './containers/SearchRoute';
import CreateLeagueRoute from './containers/CreateLeagueRoute';
import LeagueUseInviteRoute from './containers/LeagueUseInviteRoute';

import * as pages from './pages';
import routes from './utils/routes';

import { Wrapper } from './Routes.style';

class Routes extends React.PureComponent {
  render() {
    const { location } = this.props;

    return (
      <Wrapper>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            <section className="route-section">
              <Switch location={location}>
                <Route exact path={routes.home} component={HomeRoute} />
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

                <Route path={routes._leagues} component={pages.League} />
                <Route
                  exact
                  path={routes.settings}
                  component={pages.Settings}
                />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    );
  }
}

export default withRouter(Routes);
