import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <p style={{ color: 'red' }}>
      <b>
        {message}
      </b>
    </p>
  );
};

ErrorMessage.defaultProps = {
  message: 'Something went wrong, please wait a few seconds and then try again.'
};

export default ErrorMessage;
