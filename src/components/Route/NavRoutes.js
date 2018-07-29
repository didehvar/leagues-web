import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import routes from '../../utils/routes';

class NavRoutes extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  render() {
    const { children } = this.props;

    const navRoutes = Object.values(routes)
      .filter(r => r.navComponent)
      .map(({ exact, path, navComponent: Component }) => (
        <Route
          key={path}
          exact={exact}
          path={path}
          render={props => children(<Component {...props} />)}
        />
      ));

    return <Switch>{navRoutes}</Switch>;
  }
}

export default NavRoutes;
