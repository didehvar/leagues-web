import React from 'react';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';

import routes from '../../utils/routes';

class PrivateRoute extends React.Component {
  componentDidUpdate() {}

  checkAuthenticated = () => {
    const { authenticated, history, location } = this.props;
    if (!authenticated) {
      history.replace(routes.login, { from: location });
    }
  };

  render() {
    const { authenticated, component: Component, ...props } = this.props;

    return <Route {...props} component={Component} />;
  }
}

export default PrivateRoute;
