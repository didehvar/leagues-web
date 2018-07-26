import React from 'react';

import AnimatedRoute from './AnimatedRoute';
import Page from './Page';
import PrivateRoute from './PrivateRoute';

class RouteWithSubRoutes extends React.Component {
  shouldComponentUpdate() {
    console.log('scu', this.props);
    return true;
  }

  render() {
    const {
      private: requiresAuth,
      authenticated,
      exact,
      path,
      routes,
      component,
      full,
      style,
    } = this.props;

    const RouteComponent = requiresAuth ? PrivateRoute : AnimatedRoute;

    return (
      <RouteComponent
        authenticated={authenticated}
        full={full}
        exact={exact}
        path={path}
        style={style}
        render={props => (
          <Page
            {...props}
            component={component}
            routes={routes}
            authenticated={authenticated}
          />
        )}
      />
    );
  }
}

export default RouteWithSubRoutes;
