import React from 'react';
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import withRouter from 'react-router-dom/withRouter';
import Route from 'react-router-dom/Route';

import routes from './utils/routes';
import config from './utils/config';
import { getUserAuthenticated } from './ducks/users';
import { Auth, Feed, Home, League, Settings } from './pages';
import AnimatedSwitch from './components/UI/AnimatedSwitch';
import PrivateRoute from './components/UI/PrivateRoute';
import BottomNav from './components/BottomNav';

import { Container } from './Routes.style';

class Routes extends React.Component {
  render() {
    const { authenticated, location } = this.props;

    return (
      <Container className={config.css.fullPage}>
        {authenticated && <BottomNav />}

        <AnimatedSwitch
          location={location}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.auth} component={Auth} />

          <PrivateRoute exact path={routes.feed} component={Feed} />
          <PrivateRoute path={routes._leagues} component={League} />
          <PrivateRoute path={routes.settings} component={Settings} />

          <Route component={() => <div>Oops</div>} />
        </AnimatedSwitch>
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
