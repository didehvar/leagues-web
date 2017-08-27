import React from 'react';
import PropTypes from 'prop-types';
import { Div } from 'glamorous';
import MuiAppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import * as Style from './style';

const AppBar = ({ children, left, right }) => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Style.Container>
          <Div flexBasis="30%">
            {left}
          </Div>
          <Div flexBasis="40%">
            <Typography type="body2" color="inherit" align="center">
              {children}
            </Typography>
          </Div>
          <Div flexBasis="30%" textAlign="right">
            {right}
          </Div>
        </Style.Container>
      </Toolbar>
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
