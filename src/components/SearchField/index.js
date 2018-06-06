import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import * as leagueActions from '../../actions/leagues';
import { getLeagueSearch } from '../../reducers';

class SearchField extends Component {
  timer = null;

  handleChange = event => {
    const { setSearch, fetchLeagues } = this.props;
    const search = event.target.value;

    clearTimeout(this.timer);
    setSearch(search);

    this.timer = setTimeout(() => fetchLeagues({ search }), 500);
  };

  render() {
    const { search } = this.props;

    return (
      <TextField
        label="Search"
        value={search}
        onChange={this.handleChange}
        fullWidth
      />
    );
  }
}

export default connect(
  state => ({ search: getLeagueSearch(state) }),
  leagueActions
)(SearchField);
