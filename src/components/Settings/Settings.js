import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitIcon from '@material-ui/icons/ExitToApp';
import SupportIcon from '@material-ui/icons/ContactSupport';

import routes from '../../utils/routes';

class Settings extends React.PureComponent {
  static propTypes = {
    authenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired,
  };

  static defaultProps = {
    authenticated: false,
  };

  contact() {
    window.chaport.on('ready', function() {
      window.chaport.open();
    });
  }

  logout = () => {
    const { logout, history } = this.props;
    logout();
    history.push(routes.home);
  };

  render() {
    const { authenticated } = this.props;

    return (
      <List>
        {authenticated && (
          <ListItem button onClick={this.logout}>
            <ListItemIcon>
              <ExitIcon />
            </ListItemIcon>
            <ListItemText primary="Sign out" />
          </ListItem>
        )}

        <ListItem button onClick={this.contact}>
          <ListItemIcon>
            <SupportIcon />
          </ListItemIcon>
          <ListItemText primary="Contact us" />
        </ListItem>
      </List>
    );
  }
}

export default Settings;
