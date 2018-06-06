import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export default function BottomNavButton({ ...rest }) {
  return <BottomNavigationAction style={{ minWidth: 'auto' }} {...rest} />;
}
