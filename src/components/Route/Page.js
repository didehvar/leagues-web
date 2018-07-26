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
        {Component && <Component {...props} />}

        {Object.values(routes).map((route, i) => (
          <RouteWithSubRoutes
            key={i}
            authenticated={authenticated}
            {...route}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Page;
