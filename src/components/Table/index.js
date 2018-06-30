import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

class Table extends Component {
  constructor(props) {
    super(props);

    const order = props.order;
    const orderBy = this.orderBy(props);
    this.state = {
      order,
      orderBy,
      data: this.sortData(props.data, { order, orderBy }),
    };
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (prevProps.data !== data) {
      this.setState({
        data: this.sortData(data),
      });
    }
  }

  orderBy = props => props.columns.find(c => c.default).id;

  sortData = (data, state = null) => {
    const { order, orderBy } = state || this.state;
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

    const newOrder =
      orderBy === property ? (order === 'desc' ? 'asc' : 'desc') : 'desc';
    const newOrderBy = property;

    const newState = {
      order: newOrder,
      orderBy: newOrderBy,
    };

    this.setState({
      data: this.sortData(data, newState),
      ...newState,
    });
  };

  render() {
    const { data, order, orderBy } = this.state;
    const { columns } = this.props;

    return (
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map(({ id, label, component, ...rest }) => (
              <TableCell key={id} {...rest}>
                <TableSortLabel
                  active={orderBy === id}
                  direction={order}
                  onClick={() => this.handleRequestSort(id)}
                >
                  {label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id} hover>
              {columns.map(({ id, component: Tag, ...rest }, idx) => (
                <TableCell key={id} {...rest}>
                  {Tag ? <Tag value={n[id]} /> : n[id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
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
      padding: PropTypes.string,
      label: PropTypes.string,
      component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    })
  ),
  data: PropTypes.arrayOf(PropTypes.object),
  order: PropTypes.oneOf(['asc', 'desc']),
};

Table.defaultProps = {
  columns: [],
  data: [],
  order: 'asc',
};
