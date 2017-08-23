import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class SearchField extends Component {
  state = { search: '' };

  handleChange = event => this.setState({ search: event.target.value });

  render() {
    const { search } = this.state;

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

export default SearchField;
