import React, { Component } from 'react';
import Button from 'material-ui/Button';

export default class JoinLeagueButton extends Component {
  state = { joined: false };

  onClick = () => this.setState(({ joined }) => ({ joined: !joined }));

  render() {
    const { joined } = this.state;

    return (
      <Button dense color="primary" onClick={this.onClick}>
        {joined ? 'Leave' : 'Join'}
      </Button>
    );
  }
}
