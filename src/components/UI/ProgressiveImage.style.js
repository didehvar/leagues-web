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
      transition: filter 1s linear;
      transform: scale(1.1);

      ${props.theme.breakpoints.up('md')} {
        background-position: ${props.positionMd || props.position};
      }

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
