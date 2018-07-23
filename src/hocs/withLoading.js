import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { displayName } from '../utils/helpers';

import { Container } from './withLoading.style';

export default WrappedComponent => {
  class WithLoading extends WrappedComponent {
    render() {
      const result = super.render();
      if (result) return result;

      return (
        <Container>
          <CircularProgress />
        </Container>
      );
    }
  }

  WithLoading.displayName = `WithLoading(${displayName(WrappedComponent)})`;
  return WithLoading;
};
