import React from 'react';

import routes from '../../utils/routes';
import AnimatedRoute from './AnimatedRoute';

class RouteAuth extends React.PureComponent {
  componentDidMount() {
    this.checkAuthenticated();
  }

  componentDidUpdate() {
    this.checkAuthenticated();
  }

  checkAuthenticated = () => {
    const { authenticated, history, location } = this.props;
    if (!authenticated) {
      history.replace(routes.login, { from: location.pathname });
    }
  };

  render() {
    const { component: Component, authenticated, ...props } = this.props;

    if (!authenticated) {
      return null;
    }

    return <Component {...props} />;
  }
}

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, authenticated, ...rest } = this.props;

    return (
      <AnimatedRoute
        {...rest}
        render={props => (
          <RouteAuth
            component={Component}
            authenticated={authenticated}
            {...props}
          />
        )}
      />
    );
  }
}

export default PrivateRoute;
