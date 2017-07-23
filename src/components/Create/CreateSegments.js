import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import moment from 'moment';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import RunIcon from 'material-ui-icons/DirectionsRun';
import BikeIcon from 'material-ui-icons/DirectionsBike';

const styleSheet = createStyleSheet('CreateSegments', theme => ({
  root: {
    display: 'flex',
    'align-items': 'center',
    'flex-direction': 'column',
    padding: 20
  },
  submit: {
    margin: '0 auto'
  },
  submitGrid: {
    display: 'flex',
    'justify-content': 'center'
  }
}));

class CreateSegments extends React.Component {
  state = {
    name: '',
    date: moment().format('YYYY-MM-DD'),
    type: 0
  };

  render() {
    const { classes } = this.props;
    const { name, date, type } = this.state;

    return (
      <div className={classes.root}>
        <Grid container gutter={24} justify="center">
          <Grid item xs={12} />
          <Grid className={classes.submitGrid} item xs={12}>
            <Button
              raised
              color="primary"
              className={classes.submit}
              component={Link}
              to="/create/segments"
            >
              Finish
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styleSheet)(CreateSegments);
