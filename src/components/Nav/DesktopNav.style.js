import styled from 'styled-components';
import MuiToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const Title = styled(Typography)`
  a,
  a:hover,
  a:active,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    filter: brightness(90%);
  }
`;

export const Flex = styled.div`
  flex-grow: 1;
`;

export const Toolbar = styled(MuiToolbar)`
  max-width: ${props => props.theme.spacing.maxWidth};
  margin: 0 auto;
  width: 100%;
`;
