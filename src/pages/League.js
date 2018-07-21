import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import League from '../components/League';
import BottomActions from '../components/League/BottomActions';

export const Container = styled.div`
  padding: ${props => props.theme.spacing.page};
  margin-bottom: 7rem;
`;

const LeaguePage = ({ match: { path }, location: { pathname } }) => (
  <React.Fragment>
    <Container>
      <Switch>
        <Route path={`${path}/:id`} component={League} />
      </Switch>
    </Container>

    <BottomActions rootPath={path} currentPath={pathname} />
  </React.Fragment>
);

export default LeaguePage;
