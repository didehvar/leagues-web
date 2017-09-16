import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

function DateRange({ start, end, ...props }) {
  if (!start && !end) return false;

  const startDate = typeof start === 'string' ? parse(start) : start;
  const endDate = typeof end === 'string' ? parse(end) : end;

  const year = ' YYYY';
  const month = ' MMM';
  const day = 'Do';

  const now = new Date();

  let leftMonth = month;
  let leftYear = year;
  let rightYear = year;

  if (start && end) {
    if (startDate.getMonth() === endDate.getMonth()) leftMonth = '';
    if (startDate.getYear() === now.getYear()) leftYear = '';
    if (leftYear === '' || endDate.getYear() === now.getYear()) rightYear = '';
  }

  return (
    <span {...props}>
      {format(startDate, `${day}${leftMonth}${leftYear}`)}
      {end ? ` - ${format(endDate, `${day}${month}${rightYear}`)}` : ' onwards'}
    </span>
  );
}

export default DateRange;

DateRange.propTypes = {
  start: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  end: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
};

DateRange.defaultProps = {
  start: undefined,
  end: undefined
};
