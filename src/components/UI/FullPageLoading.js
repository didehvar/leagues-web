import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import FullPageContainer from './FullPageContainer';

import { Container } from './FullPageLoading.style';

class FullPageLoading extends React.PureComponent {
  retry = () => {
    const { retry } = this.props;
    if (retry) return retry();
    window.location.replace('/');
  };

  render() {
    const { errorMessage, retry } = this.props;

    return (
      <FullPageContainer fixed full>
        <Container>
          {errorMessage ? (
            <React.Fragment>
              <Typography variant="title" color="error" paragraph>
                {errorMessage}
              </Typography>

              <Button variant="outlined" onClick={this.retry}>
                {retry ? 'Retry' : 'Back home'}
              </Button>
            </React.Fragment>
          ) : (
            <CircularProgress />
          )}
        </Container>
      </FullPageContainer>
    );
  }
}

export default FullPageLoading;
