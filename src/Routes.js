import React from 'react';
import { connect } from 'react-redux';
import Router from 'react-router-dom/Router';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { Transition, animated } from 'react-spring';

import { Auth, Feed, Home, League, Settings } from './pages';
import routes from './utils/routes';
import BottomNav from './components/BottomNav';

import { Container } from './Routes.style';
import { fullPageClass } from './App.style';
import { getUserAuthenticated } from './ducks/users';

class Routes extends React.Component {
  route(Component, style) {
    return props => <Component {...props} style={style} />;
  }

  componentDidMount() {
    this.redirectAuth();
  }

  componentDidUpdate() {
    this.redirectAuth();
  }

  redirectAuth = () => {};

  render() {
    const { authenticated, location } = this.props;

    return (
      <Container className={fullPageClass}>
        <BottomNav />

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
                path={routes.feed}
                render={this.route(Feed, style)}
              />

              <Route path={routes.auth} render={this.route(Auth, style)} />

              <Route
                path={routes._leagues}
                render={this.route(League, style)}
              />

              <Route
                path={routes.settings}
                render={this.route(Settings, style)}
              />
            </Switch>
          )}
        </Transition>
      </Container>
    );
  }
}

export default connect(state => ({
  authenticated: getUserAuthenticated(state),
}))(Routes);
