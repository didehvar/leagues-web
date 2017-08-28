import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddSegmentForm from '../../components/AddSegmentForm';

class AddSegmentDialog extends Component {
  state = { open: false };

  onOpen = () => this.setState({ open: true });

  onClose = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <AddSegmentForm
        open={open}
        onSubmit={() => {}}
        onOpen={this.onOpen}
        onClose={this.onClose}
      />
    );
  }
}

AddSegmentDialog.propTypes = {};

export default AddSegmentDialog;
