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

class List extends React.Component {
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

  static batchSize = 50;

  infiniteLoaderRef = React.createRef();

  cache = new CellMeasurerCache({
    fixedWidth: true,
  });

  componentDidMount() {
    this.fetch({ stopIndex: List.batchSize });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.fetch();
      this.cache.clearAll();
      this.infiniteLoaderRef.current.resetLoadMoreRowsCache();
    }
  }

  fetch = args => this.props.fetch({ ...args, search: this.props.search });

  onResize = () => this.cache.clearAll();

  isRowLoaded = ({ index }) => !!this.props.data[index];

  loadMoreRows = async ({ startIndex, stopIndex }) =>
    this.fetch({ startIndex, stopIndex });

  rowRenderer = ({ key, index, parent, style }) => {
    const { data, component: Component } = this.props;
    const league = data[index];

    if (!league) return null;

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
          <Component {...league} />
        </CellMeasurer>
      </div>
    );
  };

  render() {
    const { totalCount } = this.props;

    return (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.loadMoreRows}
        rowCount={totalCount}
        ref={this.infiniteLoaderRef}
        batchSize={List.batchSize}
      >
        {({ onRowsRendered, registerChild }) => (
          <WindowScroller>
            {({ height, isScrolling, onChildScroll, scrollTop }) => (
              <AutoSizer disableHeight>
                {({ width }) => (
                  <VirtualizedList
                    autoHeight
                    height={height}
                    width={width}
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    rowCount={totalCount}
                    rowHeight={this.cache.rowHeight}
                    rowRenderer={this.rowRenderer}
                    scrollTop={scrollTop}
                    onScroll={onChildScroll}
                    isScrolling={isScrolling}
                    deferredMeasurementCache={this.cache}
                  />
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        )}
      </InfiniteLoader>
    );
  }
}

export default List;
