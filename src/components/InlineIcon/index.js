import React from 'react';

const InlineIcon = ({ icon: Icon }) => {
  return (
    <Icon
      style={{
        verticalAlign: 'text-bottom',
        paddingRight: '0.4rem'
      }}
    />
  );
};

export default InlineIcon;
