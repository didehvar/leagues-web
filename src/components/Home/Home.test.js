import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from '../App/AppWrapper';
import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <Home />
    </AppWrapper>,
    div
  );
});
