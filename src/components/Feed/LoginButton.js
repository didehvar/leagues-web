import React from 'react';
import { stringify } from 'querystring';

import routes from '../../utils/routes';
import stravaButton from './assets/login.strava-orange.svg';

import { StravaButton } from './LoginButton.style';

class LoginButton extends React.PureComponent {
  render() {
    const stravaUrl = [
      `https://www.strava.com/oauth/authorize?client_id=${
        process.env.REACT_APP_STRAVA_CLIENT_ID
      }`,
      `redirect_uri=${encodeURIComponent(
        `${window.location.origin}${routes.authStrava}?${stringify({
          redirectTo: window.location.href,
        })}`,
      )}`,
      'response_type=code',
      'scope=view_private',
    ].join('&');

    return (
      <a href={stravaUrl}>
        <StravaButton src={stravaButton} alt="Connect with Strava" />
      </a>
    );
  }
}

export default LoginButton;
