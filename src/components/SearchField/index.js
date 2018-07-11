import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { setSearch, getSearch } from '../../ducks/leagues';

class SearchField extends Component {
  timer = null;

  handleChange = event => {
    const { setSearch } = this.props;
    const search = event.target.value;
    setSearch(search);
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
  state => ({ search: getSearch(state) }),
  { setSearch }
)(SearchField);
