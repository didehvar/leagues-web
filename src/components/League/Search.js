import React from 'react';
import Link from 'react-router-dom/Link';
import Add from '@material-ui/icons/Add';

import SearchBox from './SearchBox';
import List from './List.container';
import FloatingActionButton from '../UI/FloatingActionButton';

import routes from '../../utils/routes';

class Search extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <SearchBox />
        <List />

        <FloatingActionButton component={Link} to={routes.leagueCreate.path}>
          <Add />
          Create
        </FloatingActionButton>
      </React.Fragment>
    );
  }
}

export default Search;
