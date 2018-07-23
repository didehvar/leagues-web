import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Img = styled.img`
  min-width: 100%;
  transform: scale(1.1);
  opacity: ${props => (props.ready ? 0 : 1)};
  transition: opacity 2s ease-in-out;
  position: ${props => (props.original ? 'absolute' : 'inherit')};
  filter: blur(${props => (props.original ? 0 : 8)}px);
`;
