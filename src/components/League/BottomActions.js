import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Paper } from './BottomActions.style';

class BottomActions extends React.PureComponent {
  static propTypes = {
    rootPath: PropTypes.string.isRequired,
    currentPath: PropTypes.string.isRequired,
  };

  render() {
    const { rootPath, currentPath } = this.props;

    if (rootPath === currentPath) {
      // main league page
      return false;
    }

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
