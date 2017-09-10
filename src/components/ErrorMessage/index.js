import React from 'react';
import { P } from 'glamorous';

const ErrorMessage = ({ children }) => {
  return (
    <P color="red" fontWeight="bold">
      {children}
    </P>
  );
};

ErrorMessage.defaultProps = {
  children:
    'Something went wrong, please wait a few seconds and then try again.'
};

export default ErrorMessage;
