import styled, { css } from 'styled-components';

const FullPageContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  padding: 0 1.25rem;

  ${props =>
    !props.full &&
    css`
      ${props.theme.breakpoints.up('md')} {
        max-width: ${props.theme.spacing.maxWidth};
        margin: 0 auto;
      }
    `};
`;

export default FullPageContainer;
