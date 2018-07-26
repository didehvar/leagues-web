import React from 'react';

import routes from '../../utils/routes';
import AnimatedRoute from './AnimatedRoute';

class PrivateRoute extends React.Component {
  componentDidMount() {
    this.checkAuthenticated();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.authenticated !== this.props.authenticated) {
      this.checkAuthenticated();
    }
  }

  checkAuthenticated = () => {
    const { authenticated, history, location } = this.props;
    if (!authenticated) {
      history.replace(routes.home.path, { from: location.pathname });
    }
  };

  render() {
    const { authenticated, ...props } = this.props;

    if (!authenticated) {
      return null;
    }

    return <AnimatedRoute {...props} />;
  }
}

export default PrivateRoute;
