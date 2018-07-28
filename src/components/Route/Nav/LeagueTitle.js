import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

import { getLeagueName } from '../../../ducks/leagues';
import routes from '../../../utils/routes';

class LeagueTitle extends React.PureComponent {
  render() {
    const { match, name } = this.props;
    const route = routes.league.pathWith(match.params.id);

    return (
      <React.Fragment>
        {(match.path === routes.round.path ||
          match.path === routes.leagueStandings.path) && (
          <Hidden mdUp>
            <IconButton color="inherit" component={Link} to={route}>
              <ArrowBackIos />
            </IconButton>
          </Hidden>
        )}

        <Link to={route}>{name}</Link>
      </React.Fragment>
    );
  }
}

export default connect((state, ownProps) => ({
  name: getLeagueName(state, ownProps.match.params.id),
}))(LeagueTitle);
