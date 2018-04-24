import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isAfter from 'date-fns/is_after';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ButtonBase from 'material-ui/ButtonBase';
import Card from 'material-ui/Card';
import Done from 'material-ui-icons/Done';
import Cached from 'material-ui-icons/Cached';

import * as roundActions from '../../actions/rounds';

import Dialog from '../Dialog';
import DateRange from '../DateRange';
import InlineIcon from '../InlineIcon';

import * as Style from './style.js';

class SegmentCard extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    owner: PropTypes.bool,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    defaultOpen: PropTypes.bool
  };

  static defaultProps = {
    owner: false
  };

  constructor(props) {
    super(props);
    this.state = {
      open: props.defaultOpen
    };
  }

  handleOpenDialog = () => {
    this.props.onOpen(this.props.id);
    this.setState({ open: true });
  };

  handleCloseDialog = () => {
    this.props.onClose(this.props.id);
    this.setState({ open: false });
  };

  deleteSegment = async () => {
    this.handleCloseDialog();
    await this.props.deleteRound(this.props.leagueId, this.props.id);
  };

  render() {
    const { open } = this.state;
    const {
      children,
      id,
      name,
      startDate,
      endDate,
      owner,
      ...rest
    } = this.props;

    return (
      <div>
        <ButtonBase
          component={Style.Base}
          onClick={this.handleOpenDialog}
          {...rest}
        >
          <Card component={Style.Card}>
            <Typography type="body2" color="secondary" component="div">
              <InlineIcon icon={isAfter(new Date(), endDate) ? Done : Cached} />
              <DateRange start={startDate} end={endDate} />
            </Typography>
            <Typography type="body2">{name}</Typography>
          </Card>
        </ButtonBase>

        <Dialog
          name={name}
          open={open}
          onClose={this.handleCloseDialog}
          fullScreen
          right={
            owner ? (
              <IconButton onClick={this.deleteSegment} aria-label="Back">
                <DeleteIcon />
              </IconButton>
            ) : (
              undefined
            )
          }
        >
          {children}
        </Dialog>
      </div>
    );
  }
}

export default connect(null, roundActions)(SegmentCard);
