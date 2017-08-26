import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

class NavBarCloseButton extends Component {
  onClick = () => {
    return this.props.history.goBack();
  };

  render() {
    return (
      <IconButton color="contrast" onClick={this.onClick} aria-label="Back">
        <CloseIcon />
      </IconButton>
    );
  }
}

NavBarCloseButton.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(NavBarCloseButton);
