import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from '../App/AppWrapper';
import Create from './Create';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <Create />
    </AppWrapper>,
    div
  );
});
