import React from 'react';
import Typography from 'material-ui/Typography';

function NavBarTitle({ title }) {
  return (
    <Typography type="title" color="inherit" align="center">
      {title}
    </Typography>
  );
}

export default NavBarTitle;
