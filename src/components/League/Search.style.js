import styled from 'styled-components';

export const AddFab = styled.div`
  position: fixed;
  right: ${props => props.theme.spacing.unit * 2}px;
  bottom: ${props => props.theme.spacing.unit * 9}px;

  ${props => props.theme.breakpoints.up('md')} {
    left: auto;
    bottom: ${props => props.theme.spacing.unit * 2}px;
    transform: none;
  }
`;
