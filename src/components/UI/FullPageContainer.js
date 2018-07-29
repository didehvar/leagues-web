import styled, { css } from 'styled-components';

const FullPageContainer = styled.div`
  padding: 1rem 1.25rem 5rem;

  ${props =>
    props.full
      ? css`
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        `
      : css`
          ${props.theme.breakpoints.up('md')} {
            max-width: ${props.theme.spacing.maxWidth};
            margin: 0 auto;
          }
        `};
`;

export default FullPageContainer;
