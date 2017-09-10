import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import { connect } from 'react-redux';

import * as authActions from '../../actions/auth';
import { getAuthError } from '../../reducers';

import ErrorMessage from '../../components/ErrorMessage';

class StravaAuthHandler extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  };

  async componentDidMount() {
    const { login, history, location } = this.props;
    const query = new URLSearchParams(location.search);

    if (query.has('state') && query.has('code')) {
      await login(query.get('code'));
      history.replace(location.pathname);
    }
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

    return false;
  }
}

export default withRouter(
  connect(state => ({ errorMessage: getAuthError(state) }), authActions)(
    StravaAuthHandler
  )
);
