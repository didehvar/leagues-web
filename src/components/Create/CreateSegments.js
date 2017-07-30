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
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import StarredSegmentsDialog from './StarredSegmentsDialog';

const styleSheet = createStyleSheet('CreateSegments', theme => ({
  root: {
    display: 'flex',
    'align-items': 'center',
    'flex-direction': 'column',
    padding: '20px 0'
  },
  submit: {
    margin: '0 auto'
  },
  dialogButton: {
    margin: theme.spacing.unit
  },
  submitGrid: {
    display: 'flex',
    'justify-content': 'center'
  },
  segmentImage: {
    'max-width': '100%',
    height: 'auto',
    display: 'block'
  },
  cardMedia: {
    'min-height': 90
  },
  card: {},
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
    start: moment().format('YYYY-MM-DD'),
    end: moment().add(1, 'week').format('YYYY-MM-DD'),
    open: false,
    removed: false,
    checked: []
  };

  render() {
    const { classes } = this.props;
    const { open, start, end, removed, selectedDialog, checked } = this.state;
    console.log('create segments chcked', checked);

    return (
      <div className={classes.root}>
        <Grid container gutter={24} justify="center">
          {!removed &&
            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia}>
                  <img
                    className={classes.segmentImage}
                    src={stravaPony}
                    alt="pony"
                  />
                  <RemoveCircleIcon
                    className={classes.removeIcon}
                    color="accent"
                    onClick={() => this.setState({ removed: true })}
                  />
                </CardMedia>
                <CardContent style={{ padding: 10 }}>
                  <Typography>Dave's Cracking Segment</Typography>
                </CardContent>
              </Card>
            </Grid>}
          <Grid item xs={6}>
            <IconButton
              className={classes.addButton}
              onClick={() => this.setState({ open: true })}
            >
              <AddIcon
                className={classes.addIcon}
                style={{ width: 50, height: 50 }}
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
          <DialogTitle>Add segment</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Grid container gutter={24} justify="center">
                <Grid item xs={12}>
                  <TextField
                    id="start-date"
                    label="Start"
                    type="date"
                    className={classes.textField}
                    value={start}
                    onChange={event =>
                      this.setState({ start: event.target.value })}
                    margin="normal"
                    fullWidth
                    required
                  />
                  <TextField
                    id="end-date"
                    label="End"
                    type="date"
                    className={classes.textField}
                    value={end}
                    onChange={event =>
                      this.setState({ end: event.target.value })}
                    margin="normal"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid className={classes.submitGrid} item xs={12}>
                  <Button
                    raised
                    color="accent"
                    className={classes.dialogButton}
                    onClick={() => this.setState({ selectedDialog: 'starred' })}
                  >
                    Starred
                  </Button>
                  <Button
                    raised
                    color="accent"
                    className={classes.dialogButton}
                    onClick={() => this.setState({ selectedDialog: 'search' })}
                  >
                    Search
                  </Button>
                </Grid>
                <Grid className={classes.submitGrid} item xs={12}>
                  <Button
                    raised
                    color="primary"
                    className={classes.submit}
                    onClick={() => this.setState({ open: false })}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <StarredSegmentsDialog
          onRequestClose={(event, c) => {
            this.setState({
              selectedDialog: '',
              checked: c ? c : this.state.checked
            });
          }}
          open={selectedDialog === 'starred'}
          checked={checked}
        />
      </div>
    );
  }
}

export default withStyles(styleSheet)(CreateSegments);
