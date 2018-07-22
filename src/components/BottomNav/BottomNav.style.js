import styled from 'styled-components';
import MuiBottomNavigation from '@material-ui/core/BottomNavigation';

export const BottomNavigation = styled(MuiBottomNavigation)`
  width: 100%;
  position: fixed;
  bottom: 0;
  box-shadow: ${props => props.theme.shadows[4]};
`;
