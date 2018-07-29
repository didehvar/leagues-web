import React from 'react';
import format from 'date-fns/format';

export const displayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

export const formatDate = (dateFrom, dateTo) => {
  if (!dateTo) return format(dateFrom, 'Do MMM YYYY');
  return (
    <span>
      {formatDate(dateFrom)} &mdash; {formatDate(dateTo)}
    </span>
  );
};
