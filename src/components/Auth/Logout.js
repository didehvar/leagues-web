import React from 'react';
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import withRouter from 'react-router-dom/withRouter';

import routes from '../../utils/routes';
import { logout } from '../../ducks/users';

class Logout extends React.PureComponent {
  logout = () => {
    const { logout, history } = this.props;
    logout();
    history.push(routes.home.path);
  };

  render() {
    return this.props.children(this.logout);
  }
}

export default flowRight(
  withRouter,
  connect(
    null,
    { logout },
  ),
)(Logout);
