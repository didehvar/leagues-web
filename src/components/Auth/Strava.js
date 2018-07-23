import React from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import flowRight from 'lodash/flowRight';
import { connect } from 'react-redux';

import withLoading from '../../hocs/withLoading';

import ErrorMessage from '../../components/ErrorMessage';

class Strava extends React.PureComponent {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };

  componentDidMount() {
    const { login, history, location } = this.props;
    const query = new URLSearchParams(location.search);
    console.log(query);

    if (query.has('state') && query.has('code')) {
      console.log('should handle auth');
      // await login(query.get('code'));
      // history.replace(query.get('redirect_to') || location.pathname);
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

    return null;
  }
}

export default flowRight(
  withRouter,
  withLoading,
)(Strava);
