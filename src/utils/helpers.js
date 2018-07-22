import format from 'date-fns/format';

export const displayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

export const formatDate = date => format(date, 'Do MMM');
