import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from '../App/AppWrapper';
import SearchSegmentsDialog from './SearchSegmentsDialog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <SearchSegmentsDialog />
    </AppWrapper>,
    div
  );
});
