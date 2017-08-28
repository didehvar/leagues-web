import React, { Component } from 'react';
import Button from 'material-ui/Button';

export default class LoginButton extends Component {
  render() {
    return (
      <Button raised color="primary" onClick={this.props.onClick}>
        Login
      </Button>
    );
  }
}
