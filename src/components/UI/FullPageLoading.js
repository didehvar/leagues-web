import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fullPageClass } from '../../App.style';

import { Container } from './FullPageLoading.style';

class FullPageLoading extends React.PureComponent {
  render() {
    return (
      <Container className={fullPageClass}>
        <CircularProgress />
      </Container>
    );
  }
}

export default FullPageLoading;
