import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import * as leagueActions from '../../actions/leagues';
import { getOwnedLeagues, getAuthUser } from '../../reducers';
import Routes from '../../utils/routes';

import LeagueCard from '../../components/LeagueCard';

import * as Style from './style';

class Feed extends React.Component {
  static propTypes = {
    leagues: PropTypes.array,
    history: PropTypes.object.isRequired,
  };

  static defaultProps = {
    leagues: [],
  };

  onView = (id, slug) => this.props.history.push(Routes.league(id, slug));

  componentDidMount() {
    const { fetchLeagues, userId } = this.props;
    fetchLeagues({ userId });
  }

  render() {
    const { leagues } = this.props;

    return (
      <div>
        <Typography variant="title" color="inherit" align="center" noWrap>
          Your leagues
        </Typography>

        {leagues.map(league => (
          <Style.Card key={league.id}>
            <LeagueCard league={league} onView={this.onView} />
          </Style.Card>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    leagues: getOwnedLeagues(state),
    userId: (getAuthUser(state) || {}).id,
  }),
  leagueActions
)(Feed);