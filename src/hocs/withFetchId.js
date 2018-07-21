import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function withFetchId() {
  return WrappedComponent => {
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

        if (isFetching) {
          return false;
        }

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

    const displayName =
      WrappedComponent.displayName || WrappedComponent.name || 'Component';

    WithFetchId.displayName = `WithFetchId(${displayName})`;
    return WithFetchId;
  };
}

export default withFetchId;
