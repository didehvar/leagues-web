import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isAfter from 'date-fns/is_after';
import Typography from 'material-ui/Typography';
import Done from 'material-ui-icons/Done';
import Cached from 'material-ui-icons/Cached';
import ButtonBase from 'material-ui/ButtonBase';
import Card from 'material-ui/Card';

import Dialog from '../Dialog';
import DateRange from '../DateRange';
import InlineIcon from '../InlineIcon';

import * as Style from './style.js';

class SegmentCard extends Component {
  state = { open: false };

  handleOpenDialog = () => this.setState({ open: true });

  handleCloseDialog = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    const { children, id, name, startDate, endDate, ...rest } = this.props;

    return (
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

          <Dialog
            name={name}
            open={open}
            onClose={this.handleCloseDialog}
            fullScreen
          >
            {children}
          </Dialog>
        </Card>
      </ButtonBase>
    );
  }
}

export default SegmentCard;

SegmentCard.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
};

SegmentCard.defaultProps = {};
