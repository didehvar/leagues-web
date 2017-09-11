import React, { Component } from 'react';

import AddSegmentForm from '../../components/AddSegmentForm';

class AddSegmentDialog extends Component {
  state = { open: false };

  onOpen = () => this.setState({ open: true });

  onClose = () => this.setState({ open: false });

  onSubmit = values => {
    console.log('🍻', values);
  };

  render() {
    const { open } = this.state;

    return (
      <AddSegmentForm
        open={open}
        onSubmit={this.onSubmit}
        onOpen={this.onOpen}
        onClose={this.onClose}
      />
    );
  }
}

AddSegmentDialog.propTypes = {};

export default AddSegmentDialog;
