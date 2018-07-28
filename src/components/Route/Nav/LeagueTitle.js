import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { getLeagueName } from '../../../ducks/leagues';
import routes from '../../../utils/routes';

class LeagueTitle extends React.PureComponent {
  render() {
    const { match, name } = this.props;
    const route = routes.league.pathWith(match.params.id);

    return (
      <React.Fragment>
        {match.params.roundId && (
          <IconButton color="inherit" component={Link} to={route}>
            <ArrowBack />
          </IconButton>
        )}

        <Link to={route}>{name}</Link>
      </React.Fragment>
    );
  }
}

export default connect((state, ownProps) => ({
  name: getLeagueName(state, ownProps.match.params.id),
}))(LeagueTitle);
