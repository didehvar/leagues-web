import { injectGlobal } from 'styled-components';

import config from './utils/config';

injectGlobal`
  .${config.css.fullPage} {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    padding: 1rem 1.25rem;
  }
`;
