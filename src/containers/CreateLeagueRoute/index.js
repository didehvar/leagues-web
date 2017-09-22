import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from '../../utils/routes';

import * as leagueActions from '../../actions/leagues';
import { getLeagueError, getCurrentLeague } from '../../reducers';

import CreateLeagueForm from '../../components/CreateLeagueForm';
import ErrorMessage from '../../components/ErrorMessage';

class CreateLeagueRoute extends Component {
  onCreate = async values => {
    const { result, entities } = await this.props.createLeague(values);
    this.props.history.push(
      Routes.league(result, entities.leagues[result].slug)
    );
  };

  render() {
    const { errorMessage } = this.props;

    return (
      <div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <CreateLeagueForm onSubmit={this.onCreate} />
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    errorMessage: getLeagueError(state),
    league: getCurrentLeague(state)
  }),
  leagueActions
)(CreateLeagueRoute);
