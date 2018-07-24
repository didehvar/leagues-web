import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import config from '../../utils/config';

import { Container } from './FullPageLoading.style';

class FullPageLoading extends React.PureComponent {
  render() {
    return (
      <Container className={config.css.fullPage}>
        <CircularProgress />
      </Container>
    );
  }
}

export default FullPageLoading;
