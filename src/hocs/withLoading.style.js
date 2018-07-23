import styled, { css } from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: ${props => props.theme.spacing.page};
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterWrapper = styled.div`
  flex: 1;
`;

export const Text = styled(Typography)`
  color: ${props => props.theme.palette.grey[50]};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  ${props => console.log(props.theme)} ${props =>
    props.variant === 'subheading' &&
    css`
      line-height: 1.2em;
      font-size: 1.25rem;
    `};
`;

export const Footer = styled.div`
  width: 100%;

  img {
    width: 200px;
  }
`;
