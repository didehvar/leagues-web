import React from 'react';
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import withRouter from 'react-router-dom/withRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { Transition, config } from 'react-spring';

import routes from './utils/routes';
import { getUserAuthenticated } from './ducks/users';
import Nav from './components/Nav';
import RouteWithSubRoutes from './components/Route/RouteWithSubRoutes';

import { Container } from './Routes.style';

class Routes extends React.Component {
  render() {
    const { authenticated, location } = this.props;

    return (
      <Container>
        {location.pathname !== routes.home.path && <Nav />}

        <Transition
          native
          config={config.slow}
          keys={location.pathname}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {style => (
            <Switch location={location}>
              {Object.values(routes).map((route, i) => (
                <RouteWithSubRoutes
                  key={i}
                  authenticated={authenticated}
                  style={style}
                  {...route}
                />
              ))}

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
