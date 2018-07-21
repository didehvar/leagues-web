import React from 'react';

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
    return <div>Loading...</div>;
  }

  return null;
};

export default Loading;
