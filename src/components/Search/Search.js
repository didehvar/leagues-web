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
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import gbFlag from './gb-flag.png';
import caFlag from './ca-flag.png';
import noFlag from './no-flag.png';

const flags = [gbFlag, caFlag, noFlag];

const styleSheet = createStyleSheet('Search', theme => ({
  root: {
    display: 'flex',
    'align-items': 'center',
    'flex-direction': 'column',
    padding: 20
  },
  textField: {},
  paper: {
    margin: '0 auto'
  },
  submit: {
    margin: '0 auto'
  },
  submitGrid: {
    display: 'flex',
    'justify-content': 'center'
  },
  flag: {
    'max-width': '100%',
    height: 'auto',
    display: 'block'
  }
}));

class Search extends React.Component {
  state = {
    name: '',
    date: moment().format('YYYY-MM-DD'),
    type: 0
  };

  render() {
    const { classes } = this.props;
    const { search } = this.state;

    return (
      <div className={classes.root}>
        <Grid container gutter={24} justify="center">
          <Grid item xs={12}>
            <TextField
              id="search"
              label="Search leagues"
              className={classes.textField}
              value={search}
              onChange={event => this.setState({ search: event.target.value })}
              margin="normal"
              fullWidth
              required
            />
          </Grid>
          {flags.map(f =>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardMedia>
                  <img className={classes.flag} src={f} alt="flag" />
                </CardMedia>
                <CardContent style={{ padding: 10 }}>
                  <Typography>Some fancy league name</Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Search);
