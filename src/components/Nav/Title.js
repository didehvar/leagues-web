import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Title = styled(Typography)`
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

export default Title;
