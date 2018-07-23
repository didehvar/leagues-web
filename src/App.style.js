import styled, { injectGlobal } from 'styled-components';

export const transitionClass = 'transition-page-fill';

injectGlobal`
  .${transitionClass} {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
  }
`;

export const Container = styled.div`
  margin-bottom: ${props => props.theme.mixins.toolbar.minHeight}px;
`;
