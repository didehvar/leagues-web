import React from 'react';
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import withRouter from 'react-router-dom/withRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { Transition, config } from 'react-spring';

import routes from './utils/routes';
import { getUserAuthenticated } from './ducks/users';
import PrivateRoute from './components/UI/PrivateRoute';
import AnimatedRoute from './components/UI/AnimatedRoute';
import Nav from './components/Nav';

import { Container } from './Routes.style';

console.log(routes);

const RouteWithSubRoutes = ({
  private: requiresAuth,
  authenticated,
  exact,
  path,
  routes,
  component,
  full,
  style,
}) => {
  const RouteComponent = requiresAuth ? PrivateRoute : AnimatedRoute;

  return (
    <RouteComponent
      authenticated={authenticated}
      full={full}
      exact={exact}
      path={path}
      style={style}
      render={props => (
        // pass the sub-routes down to keep nesting
        <Page
          {...props}
          component={component}
          routes={routes}
          authenticated={authenticated}
        />
      )}
    />
  );
};

const Page = ({
  component: Component,
  routes = {},
  authenticated,
  ...props
}) => (
  <React.Fragment>
    {Component && <Component {...props} />}

    {Object.values(routes).map((route, i) => (
      <RouteWithSubRoutes key={i} authenticated={authenticated} {...route} />
    ))}
  </React.Fragment>
);

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
