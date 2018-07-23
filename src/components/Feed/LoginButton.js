import React from 'react';

import stravaButton from './assets/login.strava-orange.svg';

class LoginButton extends React.PureComponent {
  render() {
    const stravaUrl = [
      `https://www.strava.com/oauth/authorize?client_id=${
        process.env.REACT_APP_STRAVA_CLIENT_ID
      }`,
      `redirect_uri=${encodeURIComponent(
        `${window.location.protocol}//${window.location.host}${
          window.location.pathname
        }${window.location.search}`,
      )}`,
      'response_type=code',
      'scope=view_private',
    ].join('&');

    return (
      <a href={stravaUrl}>
        <img src={stravaButton} alt="Connect with Strava" />
      </a>
    );
  }
}

export default LoginButton;
