import React from 'react';

import RouteWithSubRoutes from './RouteWithSubRoutes';

class Page extends React.Component {
  render() {
    const {
      component: Component,
      routes = {},
      isAuthenticated,
      ...props
    } = this.props;

    return (
      <React.Fragment>
        <Component isAuthenticated={isAuthenticated} {...props} />

        {Object.values(routes).map(route => (
          <RouteWithSubRoutes
            key={route.path}
            isAuthenticated={isAuthenticated}
            {...route}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Page;
