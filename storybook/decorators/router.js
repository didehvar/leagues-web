import React from 'react';
import MemoryRouter from 'react-router-dom/MemoryRouter';

const defaultRouterProps = {
  initialEntries: ['/']
};

export default function routerDecorator(routerProps = {}) {
  return story =>
    <MemoryRouter {...{ ...defaultRouterProps, ...routerProps }}>
      {story()}
    </MemoryRouter>;
}
