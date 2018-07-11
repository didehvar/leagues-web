import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  List,
  WindowScroller,
  AutoSizer,
  InfiniteLoader,
} from 'react-virtualized';

import { fetchLeagues, getSearchLeagues, getTotal } from '../../ducks/leagues';

import Routes from '../../utils/routes';

import LeagueCard from '../../components/LeagueCard';
import SearchField from '../../components/SearchField';

import * as Style from './style';

class SearchRoute extends Component {
  onView = (id, slug) => this.props.history.push(Routes.league(id, slug));

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
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop, registerChild }) => (
          <div>
            <Style.SearchField>
              <SearchField />
            </Style.SearchField>

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
          </div>
        )}
      </WindowScroller>
    );
  }
}

export default connect(
  state => ({
    leagues: getSearchLeagues(state),
    totalLeagues: getTotal(state),
  }),
  { fetchLeagues }
)(SearchRoute);
