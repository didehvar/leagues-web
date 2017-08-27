import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

function DateRange({ start, end, ...props }) {
  const year = ' YYYY';
  const month = ' MMM';
  const day = 'Do';

  const now = new Date();
  const leftMonth = start.getMonth() !== end.getMonth() ? month : '';
  const leftYear = start.getYear() !== now.getYear() ? year : '';
  const rightYear =
    leftYear !== '' || end.getYear() !== now.getYear() ? year : '';

  return (
    <span {...props}>
      {format(start, `${day}${leftMonth}${leftYear}`)} -{' '}
      {format(end, `${day}${month}${rightYear}`)}
    </span>
  );
}

export default DateRange;

DateRange.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired
};
