import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { formatDate } from '../../utils/helpers';
import ClickableCard from '../UI/ClickableCard';

class RoundCard extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  };

  render() {
    const { name, startDate, endDate } = this.props;

    return (
      <ClickableCard>
        <CardContent>
          <Typography variant="headline" component="h2">
            {name}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            {formatDate(startDate)} &mdash; {formatDate(endDate)}
          </Typography>
        </CardContent>
      </ClickableCard>
    );
  }
}

export default RoundCard;
