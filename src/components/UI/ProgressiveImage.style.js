import styled, { css } from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  position: relative;

  ${props =>
    props.background &&
    css`
      height: 100%;
      background-image: url(${props.src});
      background-size: cover;
      background-position: ${props.position};
      transition: background 1s linear, filter 1s linear;
      transform: scale(1.1);

      ${!props.ready &&
        css`
          filter: blur(8px);
        `};
    `};
`;

export const Img = styled.img`
  display: block;
  min-width: 100%;
  height: auto;
  transition: opacity 2s ease-in-out;

  position: ${props => (props.original ? 'absolute' : 'inherit')};
  opacity: ${props => (props.ready ? 0 : 1)};
  filter: blur(${props => (props.original ? 0 : 8)}px);
`;
