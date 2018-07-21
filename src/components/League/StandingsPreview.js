import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class StandingsPreview extends React.PureComponent {
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          some standings....
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>more standings!</ExpansionPanelDetails>

        <Divider />

        <ExpansionPanelActions>
          <Button size="small" color="primary">
            View all
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    );
  }
}

export default StandingsPreview;
