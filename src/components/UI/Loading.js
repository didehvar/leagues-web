import React from 'react';

import FullPageLoading from '../UI/FullPageLoading';

const Loading = ({ error, retry, pastDelay }) => {
  if (error) {
    return (
      <div>
        Error! <button onClick={retry}>Retry</button>
        <code>{error.message}</code>
      </div>
    );
  }

  if (pastDelay) {
    return <FullPageLoading />;
  }

  return null;
};

export default Loading;
