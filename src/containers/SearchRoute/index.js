import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as leagueActions from '../../actions/leagues';
import { getLeagues } from '../../reducers';

import Routes from '../../utils/routes';

import LeagueCard from '../../components/LeagueCard';
import SearchField from '../../components/SearchField';

import * as Style from './style';

class SearchRoute extends Component {
  onView = (id, slug) => () => this.props.history.push(Routes.league(id, slug));

  onJoin = (id, slug) => () => console.log('🤔'); // TODO

  componentDidMount() {
    const { fetchLeagues } = this.props;
    fetchLeagues();
  }

  render() {
    const { leagues } = this.props;

    return (
      <div>
        <Style.SearchField>
          <SearchField />
        </Style.SearchField>
        {leagues.map(({ id, slug, name }) => (
          <LeagueCard
            key={id}
            id={id}
            name={name}
            onView={this.onView(id, slug)}
            onJoin={this.onJoin(id, slug)}
            style={{ marginBottom: '1rem' }}
          />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({ leagues: getLeagues(state) }),
  leagueActions
)(SearchRoute);
