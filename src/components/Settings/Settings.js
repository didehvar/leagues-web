import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitIcon from '@material-ui/icons/ExitToApp';

import Logout from '../Auth/Logout';
import ChaportListItem from '../External/ChaportListItem';

class Settings extends React.PureComponent {
  render() {
    return (
      <List>
        <Logout>
          {logout => (
            <ListItem button onClick={logout}>
              <ListItemIcon>
                <ExitIcon />
              </ListItemIcon>
              <ListItemText primary="Sign out" />
            </ListItem>
          )}
        </Logout>

        <ChaportListItem />
      </List>
    );
  }
}

export default Settings;
