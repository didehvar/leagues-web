import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import routes from '../../utils/routes';

const Nav404 = () => <div>Missing title</div>;

class NavRoutes extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    show404: PropTypes.bool,
  };

  static defaultProps = {
    show404: true,
  };

  render() {
    const { children, show404 } = this.props;

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

    return (
      <Switch>
        {navRoutes}
        {show404 && <Route component={Nav404} />}
      </Switch>
    );
  }
}

export default NavRoutes;
