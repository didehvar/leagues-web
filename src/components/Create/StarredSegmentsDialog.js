import React from 'react';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from 'material-ui/Dialog';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const styleSheet = createStyleSheet('StarredSegmentsDialog', theme => ({}));

class StarredSegmentsDialog extends React.Component {
  state = {
    checked: []
  };

  componentWillMount() {
    console.log('will mount checked', this.props.checked);
    this.setState({ checked: this.props.checked });
  }

  componentWillUpdate(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      console.log('will update checked', nextProps.checked);
      this.setState({ checked: nextProps.checked });
    }
  }

  handleToggle = (event, value) => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    console.log('handle toggle checked', newChecked);
    this.setState({ checked: newChecked });
  };

  handleCancel = event => {
    const { checked } = this.props;
    this.setState({ checked });
    this.props.onRequestClose(event, checked);
  };

  handleOk = event => {
    console.log('ok checked', this.state.checked);
    this.props.onRequestClose(event, this.state.checked);
  };

  render() {
    const { checked, ...attributes } = this.props;
    console.log('render checked', this.state.checked);

    return (
      <Dialog {...attributes}>
        <DialogTitle>Choose starred segment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container gutter={24} justify="center">
              <Grid item xs={12}>
                <List>
                  {[...Array(10).keys()].map(value =>
                    <ListItem dense button key={value}>
                      <ListItemText primary={`My super segment ${value + 1}`} />
                      <ListItemSecondaryAction>
                        <Checkbox
                          onClick={event => this.handleToggle(event, value)}
                          checked={
                            (this.state.checked || []).indexOf(value) !== -1
                          }
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styleSheet)(StarredSegmentsDialog);
