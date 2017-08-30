import React, { Component } from 'react';

import api from '../../utils/api';
import Routes from '../../utils/routes';

import LeagueCard from '../../components/LeagueCard';
import SearchField from '../../components/SearchField';

import * as Style from './style';

class SearchRoute extends Component {
  state = { leagues: [] };

  onView = (id, slug) => () => this.props.history.push(Routes.league(id, slug));

  onJoin = (id, slug) => () => console.log('🤔'); // TODO

  async componentDidMount() {
    const response = await api('leagues');

    if (response.status >= 400) {
      this.setState({ error: true });
      return;
    }

    const { data: leagues } = await response.json();
    this.setState({ leagues });
  }

  render() {
    const { leagues } = this.state;

    return (
      <div>
        <Style.SearchField>
          <SearchField />
        </Style.SearchField>
        {leagues.map(({ id, slug, name }) =>
          <LeagueCard
            key={id}
            id={id}
            name={name}
            onView={this.onView(id, slug)}
            onJoin={this.onJoin(id, slug)}
            style={{ marginBottom: '1rem' }}
          />
        )}
      </div>
    );
  }
}

export default SearchRoute;
