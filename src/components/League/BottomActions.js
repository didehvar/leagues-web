import React from 'react';
import Button from '@material-ui/core/Button';

import { Paper } from './BottomActions.style';

class BottomActions extends React.PureComponent {
  render() {
    return (
      <Paper square>
        <Button fullWidth variant="contained" color="primary">
          Join League
        </Button>
      </Paper>
    );
  }
}

export default BottomActions;
