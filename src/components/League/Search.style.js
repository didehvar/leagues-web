import styled from 'styled-components';

export const AddFab = styled.div`
  position: fixed;
  bottom: ${props => props.theme.spacing.unit * 9}px;
  right: ${props => props.theme.spacing.unit * 2}px;
  z-index: 10;
`;
