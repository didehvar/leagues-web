import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  login,
  getUserAuthenticated,
  getErrorMessage,
} from '../../ducks/users';
import routes from '../../utils/routes';

import FullPageLoading from '../UI/FullPageLoading';

class Strava extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };

  state = {
    redirectTo: null,
  };

  componentDidMount() {
    const { login, location } = this.props;
    const query = new URLSearchParams(location.search);

    if (query.has('state') && query.has('code')) {
      login(query.get('code'));
    }
  }

  componentDidUpdate(prevProps) {
    const { authenticated, history, location } = this.props;
    const query = new URLSearchParams(location.search);

    if (!prevProps.authenticated && authenticated) {
      history.replace(query.get('redirect_to') || routes.feed.path);
    }
  }

  render() {
    const { errorMessage } = this.props;

    return <FullPageLoading errorMessage={errorMessage} />;
  }
}

export default connect(
  state => ({
    authenticated: getUserAuthenticated(state),
    errorMessage: getErrorMessage(state),
  }),
  { login },
)(Strava);
