import React from 'react';
import { connect } from 'react-redux';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ExitIcon from 'material-ui-icons/ExitToApp';

import * as authActions from '../../actions/auth';
import { isAuthenticated } from '../../reducers';

import * as Style from './style';
import Routes from '../../utils/routes';

const SettingsRoute = ({ logout, authenticated, history }) => (
  <Style.Container>
    <List>
      {authenticated && (
        <ListItem
          button
          onClick={() => {
            logout();
            history.push(Routes.home);
          }}
        >
          <ListItemIcon>
            <ExitIcon />
          </ListItemIcon>
          <ListItemText primary="Sign out" />
        </ListItem>
      )}
    </List>
  </Style.Container>
);

export default connect(
  state => ({ authenticated: isAuthenticated(state) }),
  authActions
)(SettingsRoute);
