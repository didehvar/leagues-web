import React from 'react';
import PropTypes from 'prop-types';
import MuiAppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import * as Style from './style';

const AppBar = ({ children, title, left, right, ...props }) => {
  return (
    <MuiAppBar {...props}>
      <Style.Toolbar>
        <Style.Side>{left}</Style.Side>
        <Style.Center>
          <Typography type="subheading" color="inherit" align="center" noWrap>
            {title}
          </Typography>
        </Style.Center>
        <Style.Side>{right}</Style.Side>
      </Style.Toolbar>
      {children}
    </MuiAppBar>
  );
};

AppBar.propTypes = {
  children: PropTypes.node,
  left: PropTypes.element,
  right: PropTypes.element
};

AppBar.defaultProps = {
  children: undefined,
  left: undefined,
  right: undefined
};

export default AppBar;
