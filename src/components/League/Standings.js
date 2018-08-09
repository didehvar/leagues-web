import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Hidden from '@material-ui/core/Hidden';

import config from '../../utils/config';

import { Container } from './Standings.style';

const columnData = [
  { id: 'avatar', label: '', hiddenXs: true },
  { id: 'firstname', label: 'Name' },
  { id: 'result', label: 'Result', numeric: true, padding: 'none' },
  { id: 'points', label: 'Points', numeric: true, padding: 'none' },
];

class Column extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    numeric: PropTypes.bool,
    label: PropTypes.string,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    onRequestSort: PropTypes.func.isRequired,
  };

  static defaultProps = {
    numeric: false,
    label: undefined,
  };

  handleSort = () => this.props.onRequestSort(this.props.id);

  render() {
    const {
      id,
      numeric,
      label,
      order,
      orderBy,
      hiddenXs,
      padding,
    } = this.props;

    const cell = (
      <TableCell numeric={numeric} padding={padding || 'default'}>
        <Tooltip
          title="Sort"
          placement={numeric ? 'bottom-end' : 'bottom-start'}
          enterDelay={300}
        >
          <TableSortLabel
            active={orderBy === id}
            direction={order}
            onClick={this.handleSort}
          >
            {label}
          </TableSortLabel>
        </Tooltip>
      </TableCell>
    );

    if (hiddenXs) {
      return <Hidden xsDown>{cell}</Hidden>;
    }

    return cell;
  }
}

class Standings extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    points: PropTypes.array,
    type: PropTypes.oneOf([config.leagues.fastest, config.leagues.distance])
      .isRequired,
    hideResult: PropTypes.bool,
    hideColumns: PropTypes.bool,
  };

  static defaultProps = {
    title: undefined,
    points: [],
    hideResult: false,
    hideColumns: false,
  };

  static getSorting(order, orderBy) {
    return (a, b) => {
      const valueA =
        typeof a[orderBy] === 'string' ? a[orderBy].toLowerCase() : a[orderBy];

      const valueB =
        typeof b[orderBy] === 'string' ? b[orderBy].toLowerCase() : b[orderBy];

      if (order === 'desc') {
        if (typeof valueA === 'undefined') return 1;
        if (typeof valueB === 'undefined') return -1;

        return valueB < valueA ? -1 : 1;
      }

      if (typeof valueA === 'undefined') return -1;
      if (typeof valueB === 'undefined') return 1;

      return valueA < valueB ? -1 : 1;
    };
  }

  state = {
    selected: [],
    order: 'desc',
    orderBy: 'points',
  };

  handleRequestSort = property => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  render() {
    const { order, orderBy } = this.state;

    const { type, hideResult, hideColumns, points } = this.props;

    if (!points.length) return null;

    return (
      <Container>
        <Table>
          {!hideColumns && (
            <TableHead>
              <TableRow>
                {columnData.map(props => {
                  if (hideResult && props.id === 'result') return null;

                  return (
                    <Column
                      key={props.id}
                      order={order}
                      orderBy={orderBy}
                      {...props}
                      onRequestSort={this.handleRequestSort}
                    />
                  );
                })}
              </TableRow>
            </TableHead>
          )}

          <TableBody>
            {points
              .sort(Standings.getSorting(order, orderBy))
              .map(({ id, avatar, firstname, lastname, result, points }) => (
                <TableRow hover key={id} tabIndex={-1}>
                  <Hidden xsDown>
                    <TableCell padding="none" style={{ width: 70 }}>
                      <Avatar src={avatar} style={{ margin: '0 auto' }} />
                    </TableCell>
                  </Hidden>

                  <TableCell component="th" scope="row" padding="none">
                    {firstname} {lastname}
                  </TableCell>

                  {!hideResult && (
                    <TableCell numeric padding="none">
                      {result &&
                        `${result}${
                          type === config.leagues.fastest ? 's' : 'm'
                        }`}
                    </TableCell>
                  )}

                  <TableCell numeric padding="none">
                    <strong>{points}</strong> {hideResult && 'points'}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Container>
    );
  }
}

export default Standings;
