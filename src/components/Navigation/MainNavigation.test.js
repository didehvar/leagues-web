import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from '../App/AppWrapper';
import MainNavigation from './MainNavigation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppWrapper>
      <MainNavigation />
    </AppWrapper>,
    div
  );
});
