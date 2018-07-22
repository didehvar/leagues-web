import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { setSearch, getSearch } from '../../ducks/leagues';

class SearchBox extends React.PureComponent {
  timer = null;

  handleChange = event => this.props.setSearch(event.target.value);

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
  { setSearch },
)(SearchBox);
