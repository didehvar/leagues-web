import styled from 'styled-components';
import MuiBottomNavigation from '@material-ui/core/BottomNavigation';

export const BottomNavigation = styled(MuiBottomNavigation)`
  z-index: 2000;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: ${props => props.theme.shadows[4]};
`;
