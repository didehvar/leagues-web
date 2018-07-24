import React from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import flowRight from 'lodash/flowRight';
import { connect } from 'react-redux';

import { login, getUserAuthenticated } from '../../ducks/users';

import ErrorMessage from '../../components/ErrorMessage';
import FullPageLoading from '../UI/FullPageLoading';

class Strava extends React.PureComponent {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };

  componentDidMount() {
    const { authenticated, login, history, location } = this.props;
    const query = new URLSearchParams(location.search);

    if (!authenticated && query.has('state') && query.has('code')) {
      login(query.get('code'));
    }

    history.replace(query.get('redirect_to'));
  }

  render() {
    const { errorMessage } = this.props;

    if (errorMessage) {
      return (
        <ErrorMessage>
          Login failed. Please try again. {errorMessage}
        </ErrorMessage>
      );
    }

    return <FullPageLoading />;
  }
}

export default flowRight(
  withRouter,
  connect(
    state => ({
      authenticated: getUserAuthenticated(state),
    }),
    { login },
  ),
)(Strava);
