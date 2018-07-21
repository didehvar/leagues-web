import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Paper } from './BottomActions.style';

class BottomActions extends React.PureComponent {
  render() {
    return (
      <Paper square>
        <Grid container spacing={24}>
          <Grid item xs>
            <Button fullWidth variant="contained" color="primary">
              Join
            </Button>
          </Grid>

          <Grid item xs>
            <Button fullWidth variant="contained" color="primary">
              Invite
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default BottomActions;
