import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

import RoundListItem from './RoundListItem';
import Standings from './Standings';

class League extends React.PureComponent {
  render() {
    const { league, rounds, points } = this.props;

    if (!league) return false;

    return (
      <React.Fragment>
        <Standings title="Top Standings" limit={3} points={points} />
        {league.points && league.points.length > 0 && <Divider />}

        {rounds.length > 0 && (
          <List>
            <ListSubheader disableSticky color="primary">
              Rounds
            </ListSubheader>
            {rounds.map(r => <RoundListItem key={r.id} {...r} />)}
          </List>
        )}
      </React.Fragment>
    );
  }
}

export default League;
