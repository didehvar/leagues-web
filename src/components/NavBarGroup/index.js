import React from 'react';
import PropTypes from 'prop-types';
import { Div } from 'glamorous';
import Typography from 'material-ui/Typography';

import NavBarCloseButton from '../../components/NavBarCloseButton';

import * as Style from './style';

const NavBarGroup = ({ children, close, leftComponent }) => {
  return (
    <Style.Container>
      <Div flexBasis="30%">
        {(close && <NavBarCloseButton />) || leftComponent()}
      </Div>
      <Div flexBasis="40%">
        <Typography type="body2" color="inherit" align="center">
          {children}
        </Typography>
      </Div>
      <Div flexBasis="30%" />
    </Style.Container>
  );
};

NavBarGroup.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.bool,
  leftComponent: PropTypes.func
};

NavBarGroup.defaultProps = {
  close: false,
  leftComponent: () => {}
};

export default NavBarGroup;
