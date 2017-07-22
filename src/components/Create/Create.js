import React from 'react';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import * as moment from 'moment';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet('Create', theme => ({
  root: {
    display: 'flex',
    'align-items': 'center',
    'flex-direction': 'column',
    padding: 20
  },
  textField: {},
  submitWrapper: {
    display: 'flex'
  },
  submit: {
    'margin-top': 30
  }
}));

class Create extends React.Component {
  state = {
    name: '',
    date: moment().format('YYYY-MM-DD')
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container gutter={24}>
          <Grid item xs={12}>
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              id="date"
              label="Start date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              value={this.state.date}
              onChange={event => this.setState({ date: event.target.value })}
              margin="normal"
              fullWidth
              required
            />
          </Grid>
          <Grid className={classes.submitWrapper} item xs={12} justify="center">
            <Button raised color="primary" className={classes.submit}>
              Create
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Create);
