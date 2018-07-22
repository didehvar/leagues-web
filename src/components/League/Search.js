import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  List,
  WindowScroller,
  AutoSizer,
  InfiniteLoader,
} from 'react-virtualized';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import routes from '../../utils/routes';
import { fetchLeagues, getSearchLeagues, getTotal } from '../../ducks/leagues';

import LeagueCard from '../../components/LeagueCard';
import SearchField from '../../components/SearchField';

import { Container, SearchInput, AddFab } from './Search.style';

class Search extends Component {
  onView = id => this.props.history.push(`${routes._leagues}/${id}`);

  componentDidMount() {
    const { fetchLeagues } = this.props;
    fetchLeagues();
  }

  isRowLoaded = ({ index }) => !!this.props.leagues[index];

  loadMoreRows = async ({ startIndex, stopIndex }) => {
    await this.props.fetchLeagues(startIndex, stopIndex);
  };

  rowRenderer = ({ key, index, style }) => {
    return (
      <div key={key} style={style}>
        <LeagueCard league={this.props.leagues[index]} onView={this.onView} />
      </div>
    );
  };

  render() {
    const { leagues, totalLeagues } = this.props;

    return (
      <React.Fragment>
        <WindowScroller>
          {({
            height,
            isScrolling,
            onChildScroll,
            scrollTop,
            registerChild,
          }) => (
            <Container>
              <SearchInput>
                <SearchField />
              </SearchInput>

              <div ref={registerChild}>
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <InfiniteLoader
                      isRowLoaded={this.isRowLoaded}
                      loadMoreRows={this.loadMoreRows}
                      rowCount={totalLeagues}
                    >
                      {({ onRowsRendered, registerChild }) => (
                        <List
                          ref={registerChild}
                          autoHeight
                          height={height}
                          isScrolling={isScrolling}
                          onScroll={onChildScroll}
                          rowCount={leagues.length}
                          rowHeight={156}
                          rowRenderer={this.rowRenderer}
                          scrollTop={scrollTop}
                          width={width}
                          overscanRowCount={10}
                          onRowsRendered={onRowsRendered}
                        />
                      )}
                    </InfiniteLoader>
                  )}
                </AutoSizer>
              </div>
            </Container>
          )}
        </WindowScroller>

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

export default connect(
  state => ({
    leagues: getSearchLeagues(state),
    totalLeagues: getTotal(state),
  }),
  { fetchLeagues },
)(Search);
