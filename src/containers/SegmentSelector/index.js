import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RunIcon from '@material-ui/icons/DirectionsRun';
import BikeIcon from '@material-ui/icons/DirectionsBike';

import * as segmentActions from '../../actions/segments';
import { getStarredSegments } from '../../reducers';

import Dialog from '../../components/Dialog';

class SegmentSelector extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired
  };

  static defaultProps = {};

  state = { open: false };

  handleOpenDialog = async () => {
    const { fetchStarredSegments } = this.props;
    fetchStarredSegments();
    this.setState({ open: true });
  };

  handleCloseDialog = () => this.setState({ open: false });

  handleSelect = segment => () => {
    this.props.onSelect(segment);
    this.handleCloseDialog();
  };

  render() {
    const { open } = this.state;
    const {
      onSelect,
      fetchStarredSegments,
      starredSegments,
      ...rest
    } = this.props;

    return (
      <div>
        <Button
          variant="raised"
          color="primary"
          onClick={this.handleOpenDialog}
          {...rest}
        >
          View starred segments
        </Button>

        <Dialog
          name="Starred segments"
          open={open}
          onClose={this.handleCloseDialog}
          closeButton={false}
        >
          <List dense>
            {starredSegments
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(segment => (
                <ListItem
                  key={segment.id}
                  button
                  divider
                  onClick={this.handleSelect(segment)}
                >
                  <ListItemIcon>
                    {segment.activityType === 'Run' ? (
                      <RunIcon />
                    ) : (
                      <BikeIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={segment.name} />
                </ListItem>
              ))}
          </List>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  state => ({
    starredSegments: getStarredSegments(state)
  }),
  segmentActions
)(SegmentSelector);
