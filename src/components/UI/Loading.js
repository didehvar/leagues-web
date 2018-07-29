import React from 'react';

import FullPageLoading from '../UI/FullPageLoading';

class Loading extends React.PureComponent {
  reload = () => window.location.reload();

  render() {
    const { error, retry, pastDelay } = this.props;
    const chunkError = error && error.message.startsWith('Loading chunk');

    if (error || pastDelay) {
      return (
        <FullPageLoading
          errorMessage={error && error.message}
          retry={chunkError ? this.reload : retry}
        />
      );
    }

    return null;
  }
}

export default Loading;
