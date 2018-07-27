import styled, { css } from 'styled-components';

const FullPageContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  padding: 1rem 1.25rem;

  ${props =>
    !props.full &&
    css`
      ${props.theme.breakpoints.up('md')} {
        max-width: ${props.theme.spacing.maxWidth};
        margin: 64px auto 0;
      }
    `};
`;

export default FullPageContainer;
