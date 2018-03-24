import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import RunIcon from 'material-ui-icons/DirectionsRun';
import BikeIcon from 'material-ui-icons/DirectionsBike';

import * as segmentActions from '../../actions/segments';
import { getStarredSegments } from '../../reducers';

import Dialog from '../../components/Dialog';

class SegmentSelector extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired
  };

  static defaultProps = {};

  state = { open: false };

  handleOpenDialog = () => this.setState({ open: true });

  handleCloseDialog = () => this.setState({ open: false });

  handleSelect = segmentId => () => {
    this.props.onSelect(segmentId);
    this.handleCloseDialog();
  };

  componentDidMount() {
    const { fetchStarredSegments } = this.props;
    fetchStarredSegments();
  }

  render() {
    const { open } = this.state;
    const {
      onSelect,
      fetchStarredSegments,
      starredSegments,
      ...rest
    } = this.props;

    return (
      <Button raised color="primary" onClick={this.handleOpenDialog} {...rest}>
        View starred segments
        <Dialog
          name="Starred segments"
          open={open}
          onClose={this.handleCloseDialog}
          closeButton={false}
        >
          <List dense>
            {starredSegments.map(segment => (
              <ListItem
                key={segment.id}
                button
                divider
                onClick={this.handleSelect(segment.id)}
              >
                <ListItemIcon>
                  {segment.activity_type === 'Run' ? <RunIcon /> : <BikeIcon />}
                </ListItemIcon>
                <ListItemText primary={segment.name} />
              </ListItem>
            ))}
          </List>
        </Dialog>
      </Button>
    );
  }
}

export default connect(
  state => ({ starredSegments: getStarredSegments(state) }),
  segmentActions
)(SegmentSelector);
