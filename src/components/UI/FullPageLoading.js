import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Container } from './FullPageLoading.style';

class FullPageLoading extends React.PureComponent {
  render() {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }
}

export default FullPageLoading;
