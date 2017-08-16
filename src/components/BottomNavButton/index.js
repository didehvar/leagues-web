import React, { Component } from 'react';
import { BottomNavigationButton } from 'material-ui/BottomNavigation';

export default function BottomNavButton({ ...rest }) {
  return <BottomNavigationButton style={{ minWidth: 'auto' }} {...rest} />;
}
