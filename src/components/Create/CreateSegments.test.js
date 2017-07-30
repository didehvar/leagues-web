import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from '../App/AppWrapper';
import CreateSegments from './CreateSegments';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <CreateSegments />
    </AppWrapper>,
    div
  );
});
