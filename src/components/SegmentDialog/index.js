import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Button from 'material-ui/Button';

import AppBar from '../AppBar';

const SegmentDialog = ({ open, onClose, onSubmit }) =>
  <Dialog
    fullScreen
    open={open}
    onRequestClose={onClose}
    transition={<Slide direction="up" />}
  >
    <AppBar
      left={
        <IconButton color="contrast" onClick={onClose} aria-label="Back">
          <CloseIcon />
        </IconButton>
      }
      right={
        <Button color="accent" onClick={onSubmit}>
          Create
        </Button>
      }
    >
      New League
    </AppBar>
  </Dialog>;

SegmentDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

SegmentDialog.defaultProps = {
  open: false
};

export default SegmentDialog;
