import styled from 'styled-components';
import MuiToolbar from '@material-ui/core/Toolbar';

export const Flex = styled.div`
  flex-grow: 1;
`;

export const Toolbar = styled(MuiToolbar)`
  max-width: ${props => props.theme.spacing.maxWidth};
  margin: 0 auto;
  width: 100%;
`;
