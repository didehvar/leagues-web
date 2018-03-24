import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as roundActions from '../../actions/rounds';

import AddSegmentForm from '../../components/AddSegmentForm';

class AddSegmentDialog extends Component {
  state = { open: false };

  onOpen = () => this.setState({ open: true });

  onClose = () => this.setState({ open: false });

  onSubmit = async values => {
    const { leagueId, createRound } = this.props;
    await createRound(leagueId, values);
  };

  render() {
    const { children } = this.props;
    const { open } = this.state;

    return (
      <AddSegmentForm
        open={open}
        onSubmit={this.onSubmit}
        onOpen={this.onOpen}
        onClose={this.onClose}
      >
        {children}
      </AddSegmentForm>
    );
  }
}

AddSegmentDialog.propTypes = {
  leagueId: PropTypes.number
};

AddSegmentDialog.defaultProps = {
  leagueId: undefined
};

export default connect(null, roundActions)(AddSegmentDialog);
