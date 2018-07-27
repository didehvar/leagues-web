import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import routes from '../../utils/routes';

const DefaultNav = () => <div>Missing title</div>;

class NavRoutes extends React.Component {
  static navRoutes = Object.values(routes)
    .filter(r => r.navTitle)
    .map(({ exact, path, navTitle }) => (
      <Route key={path} exact={exact} path={path} render={() => navTitle} />
    ));

  render() {
    return (
      <Switch>
        {NavRoutes.navRoutes}
        <Route component={DefaultNav} />
      </Switch>
    );
  }
}

export default NavRoutes;
