import React from 'react';
import PropTypes from 'prop-types';
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
    const { name, startDate, endDate } = this.props;

    return (
      <ListItem>
        <ListItemText
          primary={name}
          secondary={
            <span>
              {formatDate(startDate)} &mdash; {formatDate(endDate)}
            </span>
          }
        />
      </ListItem>
    );
  }
}

export default withRouter(RoundListItem);
