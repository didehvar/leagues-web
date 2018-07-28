import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import withRouter from 'react-router-dom/withRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import routes from './utils/routes';
import Nav from './components/Nav';
import RouteWithSubRoutes from './components/Route/RouteWithSubRoutes';
import FullPageLoading from './components/UI/FullPageLoading';

import { Container, Content } from './Routes.style';

class Routes extends React.Component {
  render() {
    const { loading, history, location } = this.props;

    return (
      <Container>
        {location.pathname !== routes.home.path && (
          <Nav pathname={location.pathname} />
        )}

        <Content>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                {loading ? (
                  <Route component={FullPageLoading} />
                ) : (
                  Object.values(routes).map(route => (
                    <RouteWithSubRoutes
                      key={route.path}
                      history={history}
                      location={location}
                      {...route}
                    />
                  ))
                )}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Content>
      </Container>
    );
  }
}

export default withRouter(Routes);
