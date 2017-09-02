import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';

import api from '../../utils/api';

class StravaAuthHandler extends Component {
  state = { error: false };

  async componentWillMount() {
    const { location: { search, pathname }, history } = this.props;
    const query = new URLSearchParams(search);

    if (query.has('state') && query.has('code')) {
      try {
        const response = await api('auth/strava/exchange', {
          method: 'POST',
          body: {
            code: query.get('code')
          }
        });

        if (response.status >= 400) {
          this.setState({ error: true });
          return;
        }

        const { data: { token } } = await response.json();
        console.log('🦄', token); // TODO store token

        history.push(pathname);
      } catch (ex) {
        this.setState({ error: true });
      }
    }
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <p>Login failed. Please try again.</p>;
    }

    return false;
  }
}

StravaAuthHandler.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(StravaAuthHandler);
