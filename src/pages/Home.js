import React from 'react';
import Loadable from 'react-loadable';
import Route from 'react-router-dom/Route';

import routes from '../utils/routes';
import Loading from '../components/UI/Loading';

const Home = Loadable({
  loader: () => import('../components/Home'),
  loading: Loading,
  delay: 500,
});

const HomePage = () => <Route exact path={routes.home} component={Home} />;

export default HomePage;
