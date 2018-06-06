import React from 'react';
import Typography from '@material-ui/core/Typography';

import * as Style from './style';

const LeagueInviteBanner = ({ children, onClick }) => (
  <Style.Container onClick={() => onClick()}>
    <Style.Toolbar disableGutters>
      <Typography>Invite your friends</Typography>
    </Style.Toolbar>
  </Style.Container>
);

export default LeagueInviteBanner;
