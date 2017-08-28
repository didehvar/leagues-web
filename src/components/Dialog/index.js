import React from 'react';
import PropTypes from 'prop-types';
import MuiDialog from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

import AppBar from '../AppBar';

import * as Style from './style';

const Dialog = ({ children, name, open, onClose, ...props }) =>
  <MuiDialog
    open={open}
    onRequestClose={onClose}
    transition={<Slide direction="up" />}
    {...props}
  >
    <AppBar
      left={
        <IconButton onClick={onClose} aria-label="Back">
          <CloseIcon />
        </IconButton>
      }
      color="default"
      position="static"
    >
      {name}
    </AppBar>
    <Style.Wrapper>
      {children}
    </Style.Wrapper>
  </MuiDialog>;

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

Dialog.defaultProps = {
  open: false,
  classes: undefined
};

export default Dialog;
