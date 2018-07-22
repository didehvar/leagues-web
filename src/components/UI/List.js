import React from 'react';
import PropTypes from 'prop-types';
import {
  List as VirtualizedList,
  WindowScroller,
  AutoSizer,
  InfiniteLoader,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';

class List extends React.PureComponent {
  static propTypes = {
    component: PropTypes.func.isRequired,
    data: PropTypes.array,
    totalCount: PropTypes.number,
    fetch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: [],
    totalCount: 0,
  };

  cache = new CellMeasurerCache({
    fixedWidth: true,
  });

  componentDidMount() {
    this.props.fetch();
  }

  isRowLoaded = ({ index }) => !!this.props.data[index];

  loadMoreRows = ({ startIndex, stopIndex }) =>
    this.props.fetch({ startIndex, stopIndex });

  rowRenderer = ({ key, index, parent, style }) => {
    const { component: Component, data } = this.props;

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
          <Component {...data[index]} />
        </CellMeasurer>
      </div>
    );
  };

  render() {
    const { totalCount, data } = this.props;

    return (
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop, registerChild }) => (
          <div ref={registerChild}>
            <AutoSizer disableHeight>
              {({ width }) => (
                <InfiniteLoader
                  isRowLoaded={this.isRowLoaded}
                  loadMoreRows={this.loadMoreRows}
                  rowCount={totalCount}
                >
                  {({ onRowsRendered, registerChild }) => (
                    <VirtualizedList
                      ref={registerChild}
                      autoHeight
                      height={height}
                      isScrolling={isScrolling}
                      onScroll={onChildScroll}
                      rowCount={data.length}
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

export default List;
