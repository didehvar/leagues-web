import React from 'react';
import styled, { css } from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactSupport from '@material-ui/icons/ContactSupport';

const ListItemWrapper = styled(ListItem)`
  span,
  svg {
    ${props =>
      props.open &&
      css`
        color: ${props.theme.palette.secondary.main};
        font-weight: 500;
      `};
  }
`;

class ChaportListItem extends React.PureComponent {
  state = {
    loading: false,
    open: false,
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
    const { open } = this.state;
    if (open) {
      this.setState({ loading: false, open: false });
      window.chaport.close();
      return;
    }

    const timeout = setTimeout(() => this.setState({ loading: true }), 100);

    window.chaport.on('ready', () => {
      if (timeout) clearTimeout(timeout);

      this.setState({ loading: false, open: true });
      window.chaport.open();
    });
  };

  render() {
    const { loading, open } = this.state;

    return (
      <ListItemWrapper button open={open} onClick={this.contact}>
        <ListItemIcon>
          <ContactSupport />
        </ListItemIcon>
        <ListItemText
          primary={open ? 'Close' : loading ? 'Loading...' : 'Contact us'}
        />
      </ListItemWrapper>
    );
  }
}

export default ChaportListItem;
