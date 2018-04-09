import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';

class SearchField extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  state = { search: '' };

  handleChange = event => {
    const search = event.target.value;
    this.setState({ search });
    this.props.onChange(search);
  };

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
