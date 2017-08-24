import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

function DateRange({ start, end }) {
  return (
    <span>
      {format(
        start,
        `Do${start.getMonth() === end.getMonth() ? '' : ' MMM'}`
      )}{' '}
      - {format(end, 'Do MMM')}
    </span>
  );
}

export default DateRange;

DateRange.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired
};
