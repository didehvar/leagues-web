import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Div } from 'glamorous';

import * as leagueActions from '../../actions/leagues';
import { getOwnedLeagues, getAuthUser } from '../../reducers';
import routes from '../../utils/routes';

class Feed extends React.Component {
  static propTypes = {
    leagues: PropTypes.array,
    history: PropTypes.object.isRequired,
  };

  static defaultProps = {
    leagues: [],
  };

  onView = (id, slug) => this.props.history.push(routes.league(id, slug));

  createLeague = () => this.props.history.push(routes.newLeague);

  componentDidMount() {
    const { fetchLeagues, userId } = this.props;
    fetchLeagues({ userId });
  }

  render() {
    const { leagues } = this.props;

    return (
      <div>
        <Div textAlign="center" margin="2rem">
          <Button variant="raised" color="primary" onClick={this.createLeague}>
            Create league
          </Button>
        </Div>

        {leagues &&
          leagues.length > 0 && (
            <div>
              <Typography
                variant="title"
                color="inherit"
                align="center"
                noWrap
                gutterBottom
              >
                Your leagues
              </Typography>
            </div>
          )}
      </div>
    );
  }
}

export default connect(
  state => ({
    leagues: getOwnedLeagues(state),
    userId: (getAuthUser(state) || {}).id,
  }),
  leagueActions,
)(Feed);
