import React from 'react';
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import withRouter from 'react-router-dom/withRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { Transition } from 'react-spring';

import routes from './utils/routes';
import config from './utils/config';
import { getUserAuthenticated } from './ducks/users';
import { Auth, Feed, Home, League, Settings } from './pages';
import PrivateRoute from './components/UI/PrivateRoute';
import BottomNav from './components/BottomNav';

import { Container } from './Routes.style';
import AnimatedRoute from './components/UI/AnimatedRoute';

class Routes extends React.Component {
  render() {
    const { authenticated, location } = this.props;

    return (
      <Container className={config.css.fullPage}>
        {authenticated && <BottomNav />}

        <Transition
          native
          keys={location.pathname}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {style => (
            <Switch location={location}>
              <AnimatedRoute
                style={style}
                exact
                path={routes.home}
                component={Home}
              />
              <AnimatedRoute
                style={style}
                path={routes.auth}
                component={Auth}
              />

              <PrivateRoute
                style={style}
                authenticated={authenticated}
                exact
                path={routes.feed}
                component={Feed}
              />
              <PrivateRoute
                style={style}
                authenticated={authenticated}
                path={routes.leagues}
                component={League}
              />
              <PrivateRoute
                style={style}
                authenticated={authenticated}
                path={routes.settings}
                component={Settings}
              />

              <Route component={() => <div>Oops</div>} />
            </Switch>
          )}
        </Transition>
      </Container>
    );
  }
}

export default flowRight(
  withRouter,
  connect(state => ({
    authenticated: getUserAuthenticated(state),
  })),
)(Routes);
