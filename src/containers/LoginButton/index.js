import React, { Component } from 'react';
import Button from 'material-ui/Button';

export default class LoginButton extends Component {
  stravaUrl = [
    `https://www.strava.com/oauth/authorize?client_id=${process.env
      .REACT_APP_STRAVA_CLIENT_ID}`,
    `redirect_uri=${encodeURIComponent(
      `${window.location.protocol}//${window.location.host}${window.location
        .pathname}`
    )}`,
    'response_type=code',
    'scope=view_private'
  ].join('&');

  render() {
    return (
      <Button raised color="primary" component="a" href={this.stravaUrl}>
        Login
      </Button>
    );
  }
}
