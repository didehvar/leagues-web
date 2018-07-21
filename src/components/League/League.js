import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

class League extends React.PureComponent {
  render() {
    const { league, rounds } = this.props;

    if (!league) return false;

    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography noWrap variant="headline">
            {league.name}
          </Typography>
        </Grid>

        <Grid item xs={12}>
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
        </Grid>

        {rounds.map(r => (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography color="textSecondary">Word of the Day</Typography>
                <Typography variant="headline" component="h2">
                  blob
                </Typography>
                <Typography color="textSecondary">adjective</Typography>
                <Typography component="p">
                  well meaning and kindly.<br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default League;
