import React from 'react';
import Route from 'react-router-dom/Route';
import { connect } from 'react-redux';

import routes from '../../utils/routes';
import { currentUserHasRole } from '../../ducks/users';
import Page from './Page';
import FullPageContainer from '../UI/FullPageContainer';

class RouteWithSubRoutes extends React.Component {
  componentDidMount() {
    this.checkAuthenticated();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.authenticated !== this.props.authenticated) {
      this.checkAuthenticated();
    }
  }

  checkAuthenticated = () => {
    const { hasRole, authenticated, history, location } = this.props;

    if (!hasRole && !authenticated) {
      history.replace(routes.home.path, { from: location.pathname });
    }
  };

  render() {
    const {
      authenticated,
      exact,
      path,
      routes,
      component,
      fullPage,
      style,
    } = this.props;

    return (
      <Route
        authenticated={authenticated}
        exact={exact}
        path={path}
        style={style}
        render={props => (
          <FullPageContainer full={fullPage}>
            <Page
              {...props}
              component={component}
              routes={routes}
              authenticated={authenticated}
            />
          </FullPageContainer>
        )}
      />
    );
  }
}

export default connect((state, ownProps) => ({
  hasRole: ownProps.requiredRole
    ? currentUserHasRole(state, ownProps.requiredRole)
    : true,
}))(RouteWithSubRoutes);
