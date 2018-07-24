import { injectGlobal } from 'styled-components';

export const fullPageClass = 'transition-page-fill';

injectGlobal`
  .${fullPageClass} {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    padding: 1rem 1.25rem;
  }
`;
