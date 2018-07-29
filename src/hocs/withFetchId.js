import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { displayName } from '../utils/helpers';

export default WrappedComponent => {
  class WithFetchId extends React.PureComponent {
    componentDidMount() {
      this.fetch();
    }

    fetch = () => {
      const {
        fetch,
        match: {
          params: { id },
        },
      } = this.props;

      fetch(id);
    };

    render() {
      const { isFetching, errorMessage, fetch, ...props } = this.props;

      if (errorMessage) {
        return (
          <React.Fragment>
            <Typography paragraph>
              Failed to load data: {errorMessage}
            </Typography>
            {fetch && (
              <Button variant="outlined" color="primary" onClick={this.fetch}>
                Retry
              </Button>
            )}
          </React.Fragment>
        );
      }

      return <WrappedComponent {...props} />;
    }
  }

  WithFetchId.displayName = `WithFetchId(${displayName(WrappedComponent)})`;
  return WithFetchId;
};
