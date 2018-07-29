import styled, { css } from 'styled-components';

const FullPageContainer = styled.div`
  padding: 1rem 1.25rem;
  margin-bottom: 56px;

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
