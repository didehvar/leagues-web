import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import moment from 'moment';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import stravaPony from './strava-pony.jpg';
import AddIcon from 'material-ui-icons/Add';
import RemoveCircleIcon from 'material-ui-icons/RemoveCircle';
import IconButton from 'material-ui/IconButton';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

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
  },
  segmentImage: {
    height: 145
  },
  card: {
    height: 225
  },
  addButton: {
    height: '100%',
    width: '100%'
  },
  addIcon: {
    fill: theme.palette.primary[500]
  },
  removeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    fill: theme.palette.error[500]
  }
}));

class CreateSegments extends React.Component {
  state = {
    name: '',
    date: moment().format('YYYY-MM-DD'),
    type: 0,
    open: false
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Grid container gutter={24} justify="center">
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardMedia>
                <img
                  className={classes.segmentImage}
                  src={stravaPony}
                  alt="pony"
                />
                <RemoveCircleIcon
                  className={classes.removeIcon}
                  color="accent"
                />
              </CardMedia>
              <CardContent>
                <Typography type="subheading" component="h3">
                  Dave's Cracking Segment
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <IconButton
              className={classes.addButton}
              onClick={() => this.setState({ open: true })}
            >
              <AddIcon
                className={classes.addIcon}
                style={{ width: 100, height: 100 }}
              />
            </IconButton>
          </Grid>
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
        <Dialog
          onRequestClose={() => this.setState({ open: false })}
          open={open}
        >
          <DialogTitle>Segment selector</DialogTitle>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styleSheet)(CreateSegments);
