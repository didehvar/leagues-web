import React, { Component } from 'react';

import Button from '../../components/Button';

export default class LoginButton extends Component {
  onClick = () => {};

  render() {
    return (
      <Button raised color="primary" onClick={this.onClick}>
        Login
      </Button>
    );
  }
}
