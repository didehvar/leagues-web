import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from 'material-ui/Table';

class LeagueStandings extends Component {
  constructor(props) {
    super(props);

    const order = 'asc';
    const orderBy = props.columns.find(c => c.default).id;

    this.state = {
      order,
      orderBy,
      data: this.sortData(order, orderBy, props.data)
    };
  }

  sortData = (order, orderBy, data) => {
    const sort = (a, b) =>
      typeof a === 'string' ? a.localeCompare(b) : a > b ? 1 : -1;

    return data.sort(
      (a, b) =>
        order === 'desc'
          ? sort(b[orderBy], a[orderBy])
          : sort(a[orderBy], b[orderBy])
    );
  };

  handleRequestSort = property => {
    const { orderBy, order, data } = this.state;

    const newOrder = orderBy === property && order === 'desc' ? 'asc' : 'desc';
    const newOrderBy = property;

    this.setState({
      data: this.sortData(newOrder, newOrderBy, data),
      order: newOrder,
      orderBy: newOrderBy
    });
  };

  render() {
    const { data, order, orderBy } = this.state;
    const { columns } = this.props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(column =>
              <TableCell
                key={column.id}
                numeric={column.numeric}
                disablePadding={column.disablePadding}
              >
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={order}
                  onClick={() => this.handleRequestSort(column.id)}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id} hover>
                {columns.map((column, idx) =>
                  <TableCell
                    key={column.id}
                    numeric={column.numeric}
                    disablePadding={column.disablePadding}
                  >
                    {column.component
                      ? <column.component value={n[column.id]} />
                      : n[column.id]}
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default LeagueStandings;

LeagueStandings.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      default: PropTypes.bool,
      numeric: PropTypes.bool,
      disablePadding: PropTypes.bool,
      label: PropTypes.string,
      component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
};
