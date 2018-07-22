import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { formatDate } from '../../utils/helpers';
import ClickableCard from '../UI/ClickableCard';

class LeagueCard extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => this.props.onClick(this.props.id);

  render() {
    const { name, startDate } = this.props;

    return (
      <ClickableCard onClick={this.onClick}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {name}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            {formatDate(startDate)}
          </Typography>
        </CardContent>
      </ClickableCard>
    );
  }
}

export default LeagueCard;
