import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from '../App/AppWrapper';
import StarredSegmentsDialog from './StarredSegmentsDialog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <StarredSegmentsDialog />
    </AppWrapper>,
    div
  );
});
