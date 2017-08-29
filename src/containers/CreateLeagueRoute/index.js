import React, { Component } from 'react';

import Routes from '../../utils/routes';
import api from '../../utils/api';

import CreateLeagueForm from '../../components/CreateLeagueForm';
import ErrorMessage from '../../components/ErrorMessage';

class CreateLeagueRoute extends Component {
  state = { error: false };

  onCreate = async values => {
    const { history } = this.props;
    const response = await api('leagues', {
      method: 'POST',
      body: values
    });
    const { data: { id, slug } } = await response.json();

    if (response.status >= 400) {
      this.setState({ error: true });
      return;
    }

    history.push(Routes.league(id, slug));
  };

  render() {
    const { error } = this.state;

    return (
      <div>
        {error && <ErrorMessage />}
        <CreateLeagueForm onSubmit={this.onCreate} />
      </div>
    );
  }
}

export default CreateLeagueRoute;
