import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { ClickableCard } from './Round.style';

class Round extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  };

  formatDate(date) {
    return format(date, 'Do MMM');
  }

  render() {
    const { name, startDate, endDate, ...props } = this.props;

    console.log(props);

    return (
      <Card>
        <ClickableCard>
          <CardContent>
            <Typography variant="headline" component="h2">
              {name}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              {this.formatDate(startDate)} &mdash; {this.formatDate(endDate)}
            </Typography>
          </CardContent>
        </ClickableCard>
      </Card>
    );
  }
}

export default Round;
