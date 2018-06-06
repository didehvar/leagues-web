import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { isAuthenticated } from '../../reducers';

const LoginButton = ({ authenticated }) => {
  const stravaUrl = [
    `https://www.strava.com/oauth/authorize?client_id=${
      process.env.REACT_APP_STRAVA_CLIENT_ID
    }`,
    `redirect_uri=${encodeURIComponent(
      `${window.location.protocol}//${window.location.host}${
        window.location.pathname
      }${window.location.search}`
    )}`,
    'response_type=code',
    'scope=view_private'
  ].join('&');

  if (authenticated) return null;

  return (
    <Button variant="raised" color="primary" component="a" href={stravaUrl}>
      Login
    </Button>
  );
};

export default connect(state => ({ authenticated: isAuthenticated(state) }))(
  LoginButton
);
