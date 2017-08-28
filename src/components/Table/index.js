import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiTable, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from 'material-ui/Table';

class Table extends Component {
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
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map(({ id, label, component, ...rest }) =>
              <TableCell key={id} {...rest}>
                <TableSortLabel
                  active={orderBy === id}
                  direction={order}
                  onClick={() => this.handleRequestSort(id)}
                >
                  {label}
                </TableSortLabel>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n =>
            <TableRow key={n.id} hover>
              {columns.map(({ id, component: Tag, ...rest }, idx) =>
                <TableCell key={id} {...rest}>
                  {Tag ? <Tag value={n[id]} /> : n[id]}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </MuiTable>
    );
  }
}

export default Table;

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      default: PropTypes.bool,
      numeric: PropTypes.bool,
      disablePadding: PropTypes.bool,
      label: PropTypes.string,
      component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    })
  ),
  data: PropTypes.arrayOf(PropTypes.object)
};

Table.defaultProps = {
  columns: [],
  data: []
};
