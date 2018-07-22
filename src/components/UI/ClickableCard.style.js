import styled from 'styled-components';
import ButtonBase from '@material-ui/core/ButtonBase';

export const Container = styled.div`
  padding: ${props => props.theme.spacing.gap / 2}px 0;
`;

export const Base = styled(ButtonBase)`
  display: block;
  text-align: initial;
  width: 100%;
`;
