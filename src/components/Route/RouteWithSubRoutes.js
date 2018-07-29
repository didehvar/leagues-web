import React from 'react';
import Route from 'react-router-dom/Route';
import { connect } from 'react-redux';

import routes from '../../utils/routes';
import { currentUserHasRole, isAuthenticated } from '../../ducks/users';
import Page from './Page';
import FullPageContainer from '../UI/FullPageContainer';

class RouteWithSubRoutes extends React.Component {
  componentDidMount() {
    this.checkRole();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hasRole !== this.props.hasRole) {
      this.checkRole();
    }
  }

  checkRole = () => {
    const { requiredRole, hasRole, history, location } = this.props;

    if (requiredRole && !hasRole) {
      history.replace(routes.home.path, { from: location.pathname });
    }
  };

  render() {
    const {
      isAuthenticated,
      exact,
      path,
      routes,
      component,
      fullPage,
      style,
    } = this.props;

    return (
      <Route
        exact={exact}
        path={path}
        style={style}
        render={props => (
          <FullPageContainer full={fullPage}>
            <Page
              {...props}
              component={component}
              routes={routes}
              isAuthenticated={isAuthenticated}
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
    : false,
  isAuthenticated: isAuthenticated(state),
}))(RouteWithSubRoutes);
