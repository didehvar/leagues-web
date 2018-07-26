import React from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import routes from '../../utils/routes';
import { formatDate } from '../../utils/helpers';
import ClickableCard from '../UI/ClickableCard';

class RoundCard extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  };

  onClick = () => {
    const { history, id, leagueId } = this.props;
    history.push(
      routes.leagues.routes.view.routes.round.pathWith(leagueId, id),
    );
  };

  render() {
    const { name, startDate, endDate } = this.props;

    return (
      <ClickableCard onClick={this.onClick}>
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

export default withRouter(RoundCard);
