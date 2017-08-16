import React from 'react';
import Button from 'material-ui/Button';

function TestButton({ children, ...attributes }) {
  return (
    <Button {...attributes}>
      {children}
    </Button>
  );
}

export default TestButton;
