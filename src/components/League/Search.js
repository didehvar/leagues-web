import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import Spacer from '../UI/Spacer';
import SearchBox from './SearchBox';
import List from './List.container';

import { Container, AddFab } from './Search.style';

class Search extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Container>
          <SearchBox />
          <Spacer />
          <List />
        </Container>

        <AddFab>
          <Zoom in>
            <Button variant="fab" color="primary" aria-label="Add">
              <AddIcon />
            </Button>
          </Zoom>
        </AddFab>
      </React.Fragment>
    );
  }
}

export default Search;
