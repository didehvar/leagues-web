import React, { Component } from 'react';
import { connect } from 'react-redux';

import routes from '../../utils/routes';

import * as leagueActions from '../../actions/leagues';
import { getLeagueError, getCurrentLeague } from '../../reducers';

import AppBar from '../../components/AppBar';
import ErrorMessage from '../../components/ErrorMessage';
import CreateLeagueForm from '../../components/CreateLeagueForm';

import * as Style from './style';

class CreateLeagueRoute extends Component {
  onCreate = async values => {
    const { result, entities } = await this.props.createLeague(values);
    this.props.history.push(
      routes.league(result, entities.leagues[result].slug),
    );
  };

  render() {
    const { errorMessage } = this.props;

    return (
      <Style.Container>
        <AppBar color="default" title="Create your league" />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <CreateLeagueForm onSubmit={this.onCreate} />
      </Style.Container>
    );
  }
}

export default connect(
  (state, props) => ({
    errorMessage: getLeagueError(state),
    league: getCurrentLeague(state),
  }),
  leagueActions,
)(CreateLeagueRoute);
