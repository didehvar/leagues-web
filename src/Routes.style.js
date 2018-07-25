import styled, { injectGlobal } from 'styled-components';

import config from './utils/config';
import theme from './utils/theme';

console.log(theme);

injectGlobal`
  .${config.css.fullPage} {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    padding: 1rem 1.25rem;

    ${theme.breakpoints.up('md')} {
      margin: 64px 0 0 240px;
      position: inherit;
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin-bottom: 56px;

  ${props => props.theme.breakpoints.up('md')} {
    margin-bottom: 0;
  }
`;
