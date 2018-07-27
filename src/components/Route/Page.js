import React from 'react';

import RouteWithSubRoutes from './RouteWithSubRoutes';

class Page extends React.Component {
  render() {
    const {
      component: Component,
      routes = {},
      authenticated,
      ...props
    } = this.props;

    return (
      <React.Fragment>
        <Component {...props} />

        {Object.values(routes).map(route => (
          <RouteWithSubRoutes
            key={route.path}
            authenticated={authenticated}
            {...route}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Page;
