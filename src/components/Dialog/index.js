import React from 'react';
import PropTypes from 'prop-types';
import MuiDialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import AppBar from '../AppBar';

import * as Style from './style';

const Transition = props => <Slide direction="up" {...props} />;

const Dialog = ({
  children,
  name,
  open,
  closeButton,
  onClose,
  right,
  classes,
  ...props
}) => (
  <MuiDialog open={open} onClose={onClose} transition={Transition} {...props}>
    <AppBar
      color="default"
      position="static"
      title={name}
      left={
        closeButton ? (
          <IconButton onClick={onClose} aria-label="Back">
            <CloseIcon />
          </IconButton>
        ) : (
          undefined
        )
      }
      right={right}
    />
    <Style.Wrapper>{children}</Style.Wrapper>
  </MuiDialog>
);

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  right: PropTypes.node
};

Dialog.defaultProps = {
  open: false,
  closeButton: true,
  classes: undefined,
  right: undefined
};

export default Dialog;
