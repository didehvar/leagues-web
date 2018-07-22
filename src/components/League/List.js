import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import flowRight from 'lodash/flowRight';
import { connect } from 'react-redux';
import {
  List as VirtualizedList,
  WindowScroller,
  AutoSizer,
  InfiniteLoader,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';

import routes from '../../utils/routes';
import { fetchLeagues, getSearchLeagues, getTotal } from '../../ducks/leagues';

import LeagueCard from './LeagueCard';

class List extends React.PureComponent {
  cache = new CellMeasurerCache({
    fixedWidth: true,
  });

  componentDidMount() {
    this.props.fetchLeagues();
  }

  onClickCard = id => this.props.history.push(`${routes._leagues}/${id}`);

  isRowLoaded = ({ index }) => !!this.props.leagues[index];

  loadMoreRows = ({ startIndex, stopIndex }) =>
    this.props.fetchLeagues(startIndex, stopIndex);

  rowRenderer = ({ key, index, parent, style }) => {
    const { id, name, startDate } = this.props.leagues[index];

    return (
      <div key={key} style={style}>
        <CellMeasurer
          cache={this.cache}
          columnIndex={0}
          key={key}
          parent={parent}
          rowIndex={index}
          width={this._mostRecentWidth}
        >
          <LeagueCard
            id={id}
            name={name}
            startDate={startDate}
            onClick={this.onClickCard}
          />
        </CellMeasurer>
      </div>
    );
  };

  render() {
    const { totalLeagues, leagues } = this.props;

    return (
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop, registerChild }) => (
          <div ref={registerChild}>
            <AutoSizer disableHeight>
              {({ width }) => (
                <InfiniteLoader
                  isRowLoaded={this.isRowLoaded}
                  loadMoreRows={this.loadMoreRows}
                  rowCount={totalLeagues}
                >
                  {({ onRowsRendered, registerChild }) => (
                    <VirtualizedList
                      ref={registerChild}
                      autoHeight
                      height={height}
                      isScrolling={isScrolling}
                      onScroll={onChildScroll}
                      rowCount={leagues.length}
                      rowRenderer={this.rowRenderer}
                      scrollTop={scrollTop}
                      width={width}
                      overscanRowCount={10}
                      onRowsRendered={onRowsRendered}
                      deferredMeasurementCache={this.cache}
                      rowHeight={this.cache.rowHeight}
                    />
                  )}
                </InfiniteLoader>
              )}
            </AutoSizer>
          </div>
        )}
      </WindowScroller>
    );
  }
}

export default flowRight(
  withRouter,
  connect(
    state => ({
      leagues: getSearchLeagues(state),
      totalLeagues: getTotal(state),
    }),
    { fetchLeagues },
  ),
)(List);
