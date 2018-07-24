import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login, getUserAuthenticated } from '../../ducks/users';
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
    const { login, location, history } = this.props;
    const query = new URLSearchParams(location.search);

    if (query.has('state') && query.has('code')) {
      login(query.get('code'));
      history.replace(query.get('redirect_to') || routes.home);
    }
  }

  render() {
    return <FullPageLoading />;
  }
}

export default connect(
  state => ({
    authenticated: getUserAuthenticated(state),
  }),
  { login },
)(Strava);
