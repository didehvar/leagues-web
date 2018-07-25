import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitIcon from '@material-ui/icons/ExitToApp';
import SupportIcon from '@material-ui/icons/ContactSupport';

import routes from '../../utils/routes';
import Logout from '../Auth/Logout';

class Settings extends React.PureComponent {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  state = {
    loadingChaport: false,
  };

  componentDidMount() {
    this.loadChaport();
  }

  loadChaport = () => {
    if (window.chaport) return false;

    const _q = [];
    const _l = {};
    const chaport = {
      app_id: '5b3685c88b93487d061037ad',
      _q,
      _l,
      q: (...args) => chaport._q.push(...args),
      on: (e, fn) => {
        chaport._l[e] = chaport._l[e] || [];
        chaport._l[e].push(fn);
      },
    };
    window.chaport = chaport;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://app.chaport.com/javascripts/insert.js';
    script.async = 1;
    document.body.appendChild(script);
  };

  contact = () => {
    const timeout = setTimeout(
      () => this.setState({ loadingChaport: true }),
      100,
    );

    window.chaport.on('ready', () => {
      if (timeout) clearTimeout(timeout);
      this.setState({ loadingChaport: false });

      window.chaport.open();
    });
  };

  render() {
    const { loadingChaport } = this.state;

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

        <ListItem button onClick={this.contact}>
          <ListItemIcon>
            <SupportIcon />
          </ListItemIcon>
          <ListItemText
            primary={loadingChaport ? 'Loading...' : 'Contact us'}
          />
        </ListItem>
      </List>
    );
  }
}

export default Settings;
