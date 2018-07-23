import React from 'react';
import Loadable from 'react-loadable';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import Loading from '../components/UI/Loading';

const Home = Loadable({
  loader: () => import('../components/Home'),
  loading: Loading,
  delay: 500,
});

const HomePage = ({ match: { path } }) => (
  <Switch>
    <Route exact path={path} component={Home} />
  </Switch>
);

export default HomePage;
