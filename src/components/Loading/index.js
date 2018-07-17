import React from 'react';

const Loading = ({ error, retry, pastDelay }) => {
  if (error) {
    return (
      <div>
        Error! <button onClick={retry}>Retry</button>
      </div>
    );
  }

  if (pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
};

export default Loading;
