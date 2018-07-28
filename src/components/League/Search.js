import React from 'react';
import throttle from 'lodash/throttle';
import Link from 'react-router-dom/Link';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';

import SearchBox from './SearchBox';
import List from './List.container';

import { AddFab } from './Search.style';
import routes from '../../utils/routes';

class Search extends React.PureComponent {
  state = { scrolling: true };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.startScrollTimeout();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  startScrollTimeout = () =>
    (this.scrollTimeout = setTimeout(
      () => this.setState({ scrolling: false }),
      100,
    ));

  handleScroll = throttle(() => {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.setState({ scrolling: true });
    this.startScrollTimeout();
  }, 100);

  render() {
    const { scrolling } = this.state;

    return (
      <React.Fragment>
        <SearchBox />
        <List />

        <AddFab>
          <Zoom in={!scrolling}>
            <Button
              variant="extendedFab"
              color="primary"
              aria-label="Create"
              component={Link}
              to={routes.leagueCreate.path}
            >
              <Add />
              Create
            </Button>
          </Zoom>
        </AddFab>
      </React.Fragment>
    );
  }
}

export default Search;
