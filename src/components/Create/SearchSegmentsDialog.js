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

const styleSheet = createStyleSheet('SearchSegmentsDialog', theme => ({}));

class SearchSegmentsDialog extends React.Component {
  state = {
    checked: []
  };

  componentWillMount() {
    this.setState({ checked: this.props.checked });
  }

  componentWillUpdate(nextProps) {
    if (nextProps.checked !== this.props.checked) {
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

    this.setState({ checked: newChecked });
  };

  handleCancel = () => {
    this.props.onRequestClose(this.props.checked);
  };

  handleOk = () => {
    this.props.onRequestClose(this.state.checked);
  };

  render() {
    const { ...attributes } = this.props;
    const { checked } = this.state;
    console.log('checked', checked);

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
                          checked={(checked || []).indexOf(value) !== -1}
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

export default withStyles(styleSheet)(SearchSegmentsDialog);
