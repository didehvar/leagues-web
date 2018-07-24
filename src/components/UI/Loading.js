import React from 'react';

import FullPageLoading from '../UI/FullPageLoading';

const Loading = ({ error = {}, retry, pastDelay }) => {
  if (error || pastDelay) {
    return <FullPageLoading errorMessage={error.message} retry={retry} />;
  }

  return null;
};

export default Loading;
