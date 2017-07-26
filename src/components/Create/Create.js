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

const styleSheet = createStyleSheet('Create', theme => ({
  root: {
    display: 'flex',
    'align-items': 'center',
    'flex-direction': 'column',
    padding: 20
  },
  textField: {},
  paper: {
    margin: '0 auto',
    'max-width': 400
  },
  submit: {
    margin: '0 auto'
  },
  submitGrid: {
    display: 'flex',
    'justify-content': 'center'
  }
}));

class Create extends React.Component {
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
          <Grid item xs={12}>
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              value={name}
              onChange={event => this.setState({ name: event.target.value })}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              id="date"
              label="Start date"
              type="date"
              className={classes.textField}
              value={date}
              onChange={event => this.setState({ date: event.target.value })}
              margin="normal"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Tabs
                index={type}
                onChange={(event, index) => this.setState({ type: index })}
                indicatorColor="primary"
                textColor="primary"
                fullWidth
              >
                <Tab icon={<RunIcon />} />
                <Tab icon={<BikeIcon />} />
              </Tabs>
            </Paper>
          </Grid>
          <Grid className={classes.submitGrid} item xs={12}>
            <Button
              raised
              color="primary"
              className={classes.submit}
              component={Link}
              to="/create/segments"
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Create);
