import React from 'react';

import Standings from './Standings';

class Round extends React.PureComponent {
  render() {
    const { league } = this.props;

    if (!league) return false;

    return <Standings pointIds={league.points} />;
  }
}

export default Round;
