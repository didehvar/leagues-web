import React from 'react';
import PropTypes from 'prop-types';
import { Div } from 'glamorous';
import MuiAppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';

import * as Style from './style';

const AppBar = ({ children, title, left, right, ...props }) => {
  return (
    <MuiAppBar {...props}>
      <Style.Toolbar>
        <Div flexBasis="15%">
          {left}
        </Div>
        <Div flexBasis="70%" maxWidth="70%">
          <Typography type="subheading" color="inherit" align="center" noWrap>
            {title}
          </Typography>
        </Div>
        <Div flexBasis="15%" textAlign="right">
          {right}
        </Div>
      </Style.Toolbar>
      {children}
    </MuiAppBar>
  );
};

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
  left: PropTypes.element,
  right: PropTypes.element
};

AppBar.defaultProps = {
  left: undefined,
  right: undefined
};

export default AppBar;
