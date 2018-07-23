import styled, { css } from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Text = styled(Typography)`
  color: ${props => props.theme.palette.grey[50]};
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);

  ${props =>
    props.variant === 'subheading' &&
    css`
      line-height: 1.2em;
      font-size: 1.25rem;
    `};
`;

export const PoweredByImg = styled.img`
  width: auto;
  height: 38px;
`;
