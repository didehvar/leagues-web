import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import withRouter from 'react-router-dom/withRouter';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import routes from '../../utils/routes';
import { formatDate } from '../../utils/helpers';

class RoundListItem extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  };

  onClick = () => {
    const { history, id, leagueId } = this.props;
    history.push(routes.round.pathWith(leagueId, id));
  };

  render() {
    const { id, leagueId, name, startDate, endDate } = this.props;

    return (
      <ListItem
        button
        component={Link}
        to={routes.round.pathWith(leagueId, id)}
      >
        <ListItemText
          primary={name}
          secondary={formatDate(startDate, endDate)}
        />
      </ListItem>
    );
  }
}

export default withRouter(RoundListItem);
